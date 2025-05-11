export class DataBaseModel {
  id!: string;
}

export class DatabaseTable<Model extends DataBaseModel> {

  records: {[id: string]: Model} = {};

  getById(id: string) {
    return this.records[id] || null;
  }

  findOne(predicate: (model: Model) => boolean) {
    return Object.values(this.records).find(predicate) || null;
  }

  findMany(predicate: (model: Model) => boolean) {
    return Object.values(this.records).filter(predicate) || [];
  }

  getAll() {
    return Object.values(this.records);
  }

  insert(record: Model) {
    if (record.id in this.records) {
      throw new Error(`Record with id=${record.id} already exists!`);
    }

    this.records[record.id] = record;
  }

  delete(record: Model) {
    delete this.records[record.id];
  }
}