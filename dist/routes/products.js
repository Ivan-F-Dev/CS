"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const promisify = require("./../utils/promisify");
const express = require('express'), router = express.Router();
router.route('/')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(req.query.hasOwnProperty('category')))
        return res.status(400).send('<h1>400 Bad request</h1>');
    let allProds, selectedProd;
    allProds = JSON.parse(yield promisify.readFileAsync(path_1.default.join(__dirname, '..', 'db', 'products.json')));
    selectedProd = allProds.filter((el) => el.category === req.query.category);
    return res.status(200).send(selectedProd);
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(req.body.hasOwnProperty('buyCount') && req.body.hasOwnProperty('id')))
        return res.status(400).send('<h1>400 Bad request</h1>');
    let curData, elemIndex, newData, newElem, entryStatus;
    curData = JSON.parse(yield promisify.readFileAsync(path_1.default.join(__dirname, '..', 'db', 'products.json')));
    elemIndex = curData.findIndex((el) => el.id === req.body.id);
    newElem = Object.assign(Object.assign({}, curData[elemIndex]), { count: curData[elemIndex].count - Number(req.body.buyCount) });
    newData = [...curData];
    newData[elemIndex] = newElem;
    entryStatus = yield promisify.writeFileAsync(path_1.default.join(__dirname, '..', 'db', 'products.json'), JSON.stringify(newData));
    return entryStatus ? res.status(200).send([curData[elemIndex], newData[elemIndex]]) : res.status(500).send('an error occurred while writing the file');
}))
    .put((req, res) => {
    res.send('update product...');
})
    .delete((req, res) => {
    res.send('delete product...');
});
module.exports = router;
