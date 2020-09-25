import { Collection, Db, MongoClient } from "mongodb";
import { JobOffer } from "../../packages/offers/models";
import settings from "@src/backend/settings";

export default class Collector {
  public static collect(jobOffers: Array<JobOffer>): void {
    connectToDb().then((databaseConnection) => {
      const collection = databaseConnection.collection("jobOffers");
      const splitted = splitJobOffers(jobOffers, collection);
      //collection.bulkWrite(splitted.notInDb);
    })

    function connectToDb(): Promise<Db> {
      return new Promise(async (resolve, reject) => {
        const mongoClient = new MongoClient(settings.databases.jobOffers.uri);
        await mongoClient.connect();
        const db = mongoClient.db(settings.databases.jobOffers.name);
        resolve(db);
      })
    }
  
    function splitJobOffers(jobOffers: Array<JobOffer>, dbCollection: Collection<JobOffer>): {inDb: Array<JobOffer>, notInDb: Array<JobOffer>} {
      const output: {inDb: Array<JobOffer>, notInDb: Array<JobOffer>} = {
        inDb: [],
        notInDb: []
      }
  
      jobOffers.forEach((jobOffer) => {
        if (dbCollection.findOne({url: jobOffer.url})) {
          output.inDb.push(jobOffer)
        } else {
          output.notInDb.push(jobOffer)
        }
      })
      return output
    }
  }
}