//Servicio para usuarios
import config from '../config/config.js'
import knex from 'knex'
export default class UsuarioService{
    constructor(){
        this.knex = knex(config)
    }

    async getUsuarios(){
        const usuarios = await this.knex.from('usuario').select('*')
        return Object.values(JSON.parse(JSON.stringify(usuarios)))
    }
    async storeUsuario(usuario){
        return this.knex('Usuario',).insert(usuario)
    }
    async updateUsuario(id,usuario){
        return this.knex('Usuario')
        .where({ID_Usuario:id})
        .update(usuario)
    }
    async deleteUsuario(id){
        return this.knex('Usuario')
        .where({ID_Usuario:id})
        .del()
    }
    async searchUsuario(id){
        return this.knex('Usuario')
        .select('*')
        .where({ID_Usuario:id})
    }
}