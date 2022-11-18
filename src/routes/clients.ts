import {Request, Response} from "express";
import path from "path";
const promisify = require("./../utils/promisify")

const express = require('express'),
    router = express.Router()

router.route('/')
    .get(async (req: Request, res: Response) => {

        let allClients = JSON.parse(await promisify.readFileAsync(path.join(__dirname, '..','db','clients.json')))

        return res.status(200).send(allClients)
})
    .post((req: Request, res: Response) => {
    res.send('create client...')
})
    .put((req: Request, res: Response) => {
    res.send('update client...')
})
    .delete((req: Request, res: Response) => {
    res.send('delete client...')
})

module.exports = router