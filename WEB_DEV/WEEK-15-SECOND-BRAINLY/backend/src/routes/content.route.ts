import express from 'express'
import isAuthenticate from '../middlware/authentication'
import { createContent } from '../controllers/content.controlle'

const router=express.Router()


router.post('/create', isAuthenticate , createContent)

export default router