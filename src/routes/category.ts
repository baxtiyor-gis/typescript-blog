import { response, Router } from 'express'
import { getRepository } from 'typeorm'
import CategoryController from '../controllers/CategoryController'




const router = Router()

const categoryController = new CategoryController()

router.route('/')
    .get(categoryController.list)
    .post(categoryController.create)

router.route('/:id')
    .put(categoryController.update)
    .delete(categoryController.delete)

export default router