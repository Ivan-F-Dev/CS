import {Request, Response} from "express";
import path from "path";
const promisify = require("./../utils/promisify")

const express = require('express'),
    router = express.Router()

router.route('/')
    .get(async (req: Request, res: Response) => {

        let allCats = JSON.parse(await promisify.readFileAsync(path.join(__dirname, '..','db','categories.json')))

        return res.status(200).send(allCats)
})
    .post((req: Request, res: Response) => {
    res.send('create category...')
})
    .put((req: Request, res: Response) => {
    res.send('update category...')
})
    .delete((req: Request, res: Response) => {
    res.send('delete category...')
})

module.exports = router