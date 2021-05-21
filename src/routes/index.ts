import { Router } from 'express'
import categoryRoutes from './category'

const router = Router()

router.use('/categories', categoryRoutes)

export default router