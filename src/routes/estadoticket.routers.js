import { Router } from 'express'
const router = Router()

import EstadoticketService from '../services/estadoticket.service.js'
const estadoTicket = new EstadoticketService()
const folder = "estadoTicket"
//Ok
router.get('/',async(req,res) => {
    try{
        const estados = await estadoTicket.getEstado()
        res.render(`${folder}/index`,{estados})
    } catch(error) {

        console.log(error)
    }
})
router.get('/create',async (req,res)=>{
    res.render(`${folder}/create`)
})
router.post('/', async (req,res) => {
    const estado = req.body
    const answer = await estadoTicket.storeEstado(estado)
    if(answer.length > 0){
        return res.send({sucesss :true,data:answer})
    }else{
        return res.send({success:false,data:"No se encuentra el estado del ticket"})
    }

})


/*
router.put('/:id', async (req,res) => {
    const estado = req.body
    const id = req.params.id
    const answer = await estadoTicket.updateEstado(id,estado)
    if(answer.length > 0){
        return res.send({sucesss :true,data:answer})
    }else{
        return res.send({success:false,data:"No se encuentra el estado del ticket"})
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const answer = await estadoTicket.deleteEstado(id)
    if(answer > 0){
        return res.send({sucesss :true,data:answer})
    }else{
        return res.send({success:false,data:"No se encuentra el estado del ticket"})
    }
})
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const answer = await estadoTicket.searchEstado(id)
    if(answer.length > 0){
        return res.send({sucesss :true,data:answer})
    }else{
        return res.send({success:false,data:"No se encuentra el estado del ticket"})
    }
})*/

export default router