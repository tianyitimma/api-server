'use strict';



class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, options = {}){
    try {
      let results = null;
      if (id) {
        options['where'] = { id: parseInt(id)};
        results = await this.model.findOne(options);
      } else {
        results = await this.model.findAll();
      }
      return results;
      
    } catch(e) {
      return e;
    }

  }

  async create(json){

    try{
      let result = await this.model.create(json);
      return result;
    } catch(e){
      return e;
    }

  }

  async update(id, json) {
    try {
      let result = await this.model.update(json,{where: {id: parseInt(id)}});
      return result;
    } catch(e){
      return e;
    }
  }

  async delete(id) {
    try{
      let result = await this.model.destroy({where: {id: parseInt(id)}});
      return result;
    } catch(e){
      return e;
    }
  }
}

module.exports = Collection;