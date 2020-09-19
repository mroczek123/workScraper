import { ObjectID } from "mongodb";

class Manager {
  get(params: object){}
  filter(params: object){}
  bulk_save(objects: Array<Model>){}
  bulk_delete(objects: Array<Model>){}
}

class Model {
  _id!: ObjectID;
  save() {}
  delete() {}
  refreshFromDb() {}
}