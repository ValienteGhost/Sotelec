import config from '../config/config.js'
import knex from 'knex'
export default class estadoticketService{
    constructor(){
        this.knex = knex(config)
    }

    async getEstado(){
        const Estado = await this.knex.from('estadoticket').select('*')
        return Object.values(JSON.parse(JSON.stringify(Estado)))
    }
    async storeEstado(estado){
        return this.knex('estadoticket').insert(estado)
    }
    async updateEstado(id,estado){
        return this.knex('estadoticket')
        .where({ID_estado:id})
        .update(estado)
    }
    async deleteEstado(id){
        return this.knex('estadoticket')
        .where({ID_estado:id})
        .del()
    }
    async searchEstado(id){
        return this.knex('estadoticket')
        .select('*')
        .where({ID_estado:id})
    }
}


