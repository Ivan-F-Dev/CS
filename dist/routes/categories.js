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
    let allCats = JSON.parse(yield promisify.readFileAsync(path_1.default.join(__dirname, '..', 'db', 'categories.json')));
    return res.status(200).send(allCats);
}))
    .post((req, res) => {
    res.send('create category...');
})
    .put((req, res) => {
    res.send('update category...');
})
    .delete((req, res) => {
    res.send('delete category...');
});
module.exports = router;
