class Model {
  constructor(schema) {
    this.schema = schema;
  }

  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

  read (id) {
    const queryObj = id ? {_id: id } : {};
    return this.schema.find(queryObj)
  }

  delete (id) {
    return this.schema.findByIdAndDelete(id);
  }

  update (id, record) {
    return this.schema.findByIdAndUpdate(id, record, { new: true })
  }

}

module.exports = Model;