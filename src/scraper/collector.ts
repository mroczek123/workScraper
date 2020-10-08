import { Collection, Db, MongoClient } from "mongodb";
import { JobOfferDetailed } from "@src/packages/offers/models";
import settings from "@src/settings";

export default class Collector {
  public static collect(jobOffers: Array<JobOfferDetailed>): void {
    connectToDb().then((databaseConnection) => {
      const collection = databaseConnection.collection("jobOffers");
      splitJobOffers(jobOffers, collection).then((splitted) => {
        if (splitted.notInDb.length > 0) {
          collection.insertMany(splitted.notInDb);
        }
      });
    });

    function connectToDb(): Promise<Db> {
      return new Promise(async (resolve, reject) => {
        const mongoClient = new MongoClient(settings.database.uri, { useUnifiedTopology: true });
        await mongoClient.connect();
        const db = mongoClient.db(settings.database.dbName);
        resolve(db);
      });
    }

    function splitJobOffers(
      jobOffers: Array<JobOfferDetailed>,
      dbCollection: Collection<JobOfferDetailed>,
    ): Promise<{ inDb: Array<JobOfferDetailed>; notInDb: Array<JobOfferDetailed> }> {
      return new Promise((resolve, reject) => {
        const output: { inDb: Array<JobOfferDetailed>; notInDb: Array<JobOfferDetailed> } = {
          inDb: [],
          notInDb: [],
        };
        const promises = jobOffers.map(async (jobOffer) => {
          const found = Boolean(await dbCollection.findOne({ url: jobOffer.url }));
          found ? output.inDb.push(jobOffer) : output.notInDb.push(jobOffer);
        });
        Promise.all(promises).then(() => resolve(output));
      });
    }
  }
}
