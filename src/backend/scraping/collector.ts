import { Db, MongoClient } from "mongodb";
import { JobOffer } from "./offers/models";
import settings from "@src/backend/settings";

class Collector {
  mongoClient!: MongoClient;
  db!: Db;

  constructor() {
    this.connectToDb();
  }

  async connectToDb() {
    this.mongoClient = new MongoClient(settings.databases.jobOffers.uri);
    await this.mongoClient.connect();
    this.db = this.mongoClient.db(settings.databases.jobOffers.name);
  }

  private splitJobOffers(jobOffers: Array<JobOffer>): {inDb: Array<JobOffer>, notInDb: Array<JobOffer>} {
    const output: {inDb: Array<JobOffer>, notInDb: Array<JobOffer>} = {
      inDb: [],
      notInDb: []
    }

    function inDb(value: any){
      // TODO
      return false;
    }

    jobOffers.forEach((jobOffer) => {
      if (inDb(jobOffer)) {
        output.inDb.push(jobOffer)
      } else {
        output.notInDb.push(jobOffer)
      }
    })

    return output
  }

  collect(jobOffers: Array<JobOffer>) {
    /**
     * 1. weź oferty
     * 2. sprawdź czy są w bazie
     * 3. jeśli nie ma to dodaj
     * 4. Jeśli są to poszukaj czy są jakieś dane które wartoby zaktualizować
     */
    const splitted = this.splitJobOffers(jobOffers);
    this.db.collection("jobOffers").bulkWrite([]);
  }
}