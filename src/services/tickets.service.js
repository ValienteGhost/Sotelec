import config from '../config/config.js'
import knex from 'knex'

export default class TicketService {
    constructor(){
        this.knex = knex(config)
    }
    
    async getAllTickets() {
        const tickets = await this.knex.from('ticket').select('*');
        return Object.values(JSON.parse(JSON.stringify(tickets)));
    }

    async storeTicket(ticket) {
        return this.knex('ticket').insert(ticket);
    }


    async editTicket(id, updatedTicket) {
        return this.knex('ticket')
        .where({ID_ticket: id})
        .update(updatedTicket);
    }

    async searchTicket(id) {
        return this.knex('ticket')
        .select('*')
        .where({ID_ticket: id});
    }

    async deleteTicket(id) {
        return this.knex('ticket')
        .where({ID_ticket: id})
        .del();
    }
}
