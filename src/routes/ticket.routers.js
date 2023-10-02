import { Router } from 'express';
const router = Router();

import TicketService from '../services/tickets.service.js';
const ticketservice = new TicketService();
const folder = 'tickets'

router.get('/create',async (req,res)=>{
    res.render(`${folder}/create`)
})

router.get('/', async (req, res) => {
    try {
        const tickets = await ticketservice.getAllTickets();
        if (tickets && tickets.length > 0) {
            res.render(`${folder}/index`,{tickets})

        } else {
            res.status(404).json({ success: false, data: 'No se encontraron registros.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, data: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { ASUNTO, DESCRIPCION, FECHATICKET, ID_TECNICO, ID_TICKET, ID_USUARIO } = req.body;
        if (!ASUNTO || !DESCRIPCION || !FECHATICKET || !ID_TECNICO || !ID_TICKET || !ID_USUARIO) {
            return res.status(400).json({ success: false, data: 'Todos los campos son requeridos.' });
        }
        const newTicket = await ticketService.storeTicket(req.body);
        res.status(201).json({ success: true, data: 'Registro realizado con éxito' });
    } catch (error) {
        res.status(500).json({ success: false, data: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTicket = await ticket.updateTicket(req.params.id, req.body);
        if (updatedTicket) {
            res.status(200).json(updatedTicket);
        } else {
            res.status(404).send('Ticket not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await ticket.deleteTicket(req.params.id);
        if (result) {
            res.status(200).send('Ticket deleted successfully');
        } else {
            res.status(404).send('Ticket not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

export default router;
