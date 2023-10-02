import {Router} from 'express'
const router = Router()

const folder = 'login'

router.get('/',async (req,res)=>{
    res.render(`${folder}/login`,{layout:'mainLogin'})
})

export default router