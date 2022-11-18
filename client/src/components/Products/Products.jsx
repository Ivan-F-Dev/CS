import React, {useEffect, useState} from 'react'
import s from './Products.module.scss'
import Card from "./Card/Card";

let count = 1

const Products = () => {

    useEffect(() => {
        console.log(`Products was rendered: ${count}`)
    })

    const [tels, setTels] = useState([
        {
            id: 85689341,
            category: 'smartphone',
            producer: 'Nokia',
            name: '3.4',
            price: '72 990',
            img: 'nokia34',
            count: '12',
            color: '',
            rom: '128',
            ram: '8',
            likePushed: false,
            chartPushed: false
        },
        {
            id: 85689342,
            category: 'smartphone',
            producer: 'Xiaomi',
            name: 'Mi 10T',
            price: '40 990',
            img: 'mi10t',
            count: '20',
            color: 'black',
            rom: '256',
            ram: '8',
            likePushed: false,
            chartPushed: false
        },
        {
            id: 85689343,
            category: 'smartphone',
            producer: 'Xiaomi',
            name: 'Redmi 9',
            price: '33 990',
            img: 'redmi9',
            count: '20',
            color: 'white',
            rom: '128',
            ram: '8',
            likePushed: false,
            chartPushed: false
        },
        {
            id: 85689344,
            category: 'smartphone',
            producer: 'Samsung',
            name: 'Galaxy A12',
            price: '11 990',
            img: 'galaxya12',
            count: '14',
            color: 'black',
            rom: '32',
            ram: '3',
            likePushed: false,
            chartPushed: false
        },
        {
            id: 85689345,
            category: 'smartphone',
            producer: 'Samsung',
            name: 'Galaxy S21',
            price: '67 990',
            img: 'galaxys21',
            count: '7',
            color: '',
            rom: '128',
            ram: '8',
            likePushed: false,
            chartPushed: false
        },
        {
            id: 85689346,
            category: 'smartphone',
            producer: 'Samsung',
            name: 'Galaxy A31',
            price: '68 990',
            img: 'galaxya31',
            count: '13',
            color: 'white',
            rom: '256',
            ram: '8',
            likePushed: false,
            chartPushed: false
        },
        {
            id: 85689347,
            category: 'smartphone',
            producer: 'Samsung',
            name: 'Galaxy A51',
            price: '55 990',
            img: 'galaxya51',
            count: '4',
            color: 'white',
            rom: '128',
            ram: '8',
            likePushed: false,
            chartPushed: false
        }
    ])

    //Возвращает функцию для конкретного id
    // const createUniqueFunc = (id, prop) => {
    //     return () => {
    //         const telsCopy = [...tels]
    //         for (let tel of telsCopy) {if (tel.id === id) {tel[prop] = !tel[prop];console.log(tel);}}
    //         setTels(telsCopy)
    //     }
    // }

    return (
        <div className={s.Products}>
            <div className={s.mainContainer}>
                <h2>Смартофоны и планшеты</h2>
                <div className={s.productsWrapper}>
                    {tels.map((el) => (
                        <Card key={el.id} phone={el}/>

                    ))}
                </div>
            </div>
        </div>

    )
}

export default Products;

