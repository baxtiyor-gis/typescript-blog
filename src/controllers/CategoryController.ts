import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export default class CategoryController {

    async list(req: Request, res: Response) {
        try {
            const categories = await getRepository(Category).find()
            res.json({
                message: 'SUCCESS',
                data: categories
            })
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }


    async create(req: Request, res: Response) {
        try {
            const data = req.body

            const categoryModel = await getRepository(Category).create(data)

            const category = await getRepository(Category).save(categoryModel)

            res.json({
                message: 'SUCCESS',
                data: category
            })
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id
            const category = await getRepository(Category).findOne({ id: id })
            if (!category)
                return res.status(404).json({
                    message: 'CATEGORY_NOT_FOUND',
                })

            const updated = await getRepository(Category).update({ id: id }, req.body)

            res.json({
                message: 'SUCCESS',
                data: updated
            })


        } catch (error) {

        }
    }

    async delete(req: Request, res: Response) {
        try {

        } catch (error) {

        }
    }



}