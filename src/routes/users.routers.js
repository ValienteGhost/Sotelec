//Ruta para administrar usuarios
import {Router} from 'express'
const router = Router()

const folder = 'Usuarios'

const folder2 = 'login'
import UsuarioService from '../services/users.service.js'
const Usuario = new UsuarioService()
router.get('/login',async (req,res)=>{
    res.render(`${folder}/index`)
})
router.get('/create',async (req,res)=>{
    res.render(`${folder}/create`)
})

router.get('/',async(req,res) => {
    try{
        
        const usuarios = await Usuario.getUsuarios()
        console.log(usuarios)
        res.render('Usuarios/index',{usuarios})
    } catch(error) {

        console.log(error)
    }
})
router.post('/', async (req,res) => {
    const usuario = req.body
    const answer = await Usuario.storeUsuario(usuario)
    if(answer.length > 0){
        return res.status(200).json({sucesss:true,data:"Registro realizado con éxito"})
    }else{
        return res.status(400).json({success:false,data:"No se encuentra el registro"})
    }

})
router.put('/:id', async (req,res) => {
    const usuario = req.body
    const id = req.params.id
    const answer = await Usuario.updateUsuario(id,usuario)
    if(answer.length > 0){
        return res.status(200).json({sucesss:true,data:answer})
    }else{
        return res.status(400).json({success:false,data:"No se encuentra el registro"})
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const answer = await Usuario.deleteUsuario(id)
    if(answer.length > 0){
        return res.status(200).json({sucesss :true,data:answer})
    }else{
        return res.status(400).json({success:false,data:"No se encuentra el registro"})
    }
})
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const answer = await Usuario.searchUsuario(id)
    if(answer.length > 0){
        return res.status(200).json({sucesss :true,data:answer})
    }else{
        return res.status(400).json({success:false,data:"No se encuentra el registro"})
    }
})

export default router