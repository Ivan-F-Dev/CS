import {Request, Response} from "express";
import path from "path";
const promisify = require("./../utils/promisify")

const express = require('express'),
    router = express.Router()

router.route('/')
    .get(async (req: Request, res: Response) => {

        if ( !(req.query.hasOwnProperty('category'))) return  res.status(400).send('<h1>400 Bad request</h1>')

        let allProds, selectedProd

        allProds = JSON.parse(await promisify.readFileAsync(path.join(__dirname, '..','db','products.json')))

        selectedProd = allProds.filter( (el:any) => el.category === req.query.category)

        return res.status(200).send(selectedProd)

})
    .post(async (req: Request, res: Response) => {

        if ( !(req.body.hasOwnProperty('buyCount') && req.body.hasOwnProperty('id')) ) return  res.status(400).send('<h1>400 Bad request</h1>')

        let curData, elemIndex, newData, newElem, entryStatus

        curData = JSON.parse(await promisify.readFileAsync(path.join(__dirname, '..','db','products.json')))

        elemIndex = curData.findIndex((el:any) => el.id === req.body.id)

        newElem = {...curData[elemIndex], count: curData[elemIndex].count - Number(req.body.buyCount)}

        newData = [...curData]; newData[elemIndex] = newElem

        entryStatus = await promisify.writeFileAsync(path.join(__dirname, '..','db','products.json'),JSON.stringify(newData))

        return entryStatus ? res.status(200).send([curData[elemIndex],newData[elemIndex]]): res.status(500).send('an error occurred while writing the file')

})
    .put((req: Request, res: Response) => {
    res.send('update product...')
})
    .delete((req: Request, res: Response) => {
    res.send('delete product...')
})

module.exports = router