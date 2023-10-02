import config from '../config/config.js'
import knex from 'knex'
export default class TecnicosService{
    constructor(){
        this.knex = knex(config)
    }

    async getTecnicos(){
        const Tecnicos = await this.knex.from('tecnico').select('*')
        return Object.values(JSON.parse(JSON.stringify(Tecnicos)))
    }
    addTecnicos = async(obj) => {
        
        return this.knex('tecnico').insert(obj)
    }
    deleteTecnicos = async (id) => {

        return this.knex('tecnico').where('ID_TECNICO',id) .del()
        
    } 
    updateTecnicos = async (id,obj) => {
        return this.knex('tecnico').where({ID_TECNICO:id}).update(obj)
    }
    getTecnicosById = async(id) => {
        let tecnicos = await this.getTecnicos()
        return this.knex('tecnico').where('ID_TECNICO',id)
    }  
    getTecnicoByEmail = async(CORREOTECNICO) => {
        const tecnico = await this.knex('tecnico').where('CORREOTECNICO',CORREOTECNICO)
        return Object.values(JSON.parse(JSON.stringify(tecnico)))
    } 

    loginTecnico = async(CORREOTECNICO,PASSWORD) => {
        return this.knex('tecnico').where('ID_TECNICO',id)

    }
    
}
