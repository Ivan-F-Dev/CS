import React from 'react'
import s from './Products.module.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const dataProducts = [
    {category: 'smartphone',
        producer: 'Nokia',
        name: '3.4',
        price: '72 990',
        img: '',
        count: '12',
        color: '',
        rom: '128',
        ram: '8'},
    {category: 'smartphone',
        producer: 'Xiaomi',
        name: 'Mi 10T',
        price: '40 990',
        img: '',
        count: '20',
        color: 'black',
        rom: '256',
        ram: '8'},
    {category: 'smartphone',
        producer: 'Xiaomi',
        name: 'Redmi 9',
        price: '33 990',
        img: '',
        count: '20',
        color: 'white',
        rom: '128',
        ram: '8'},
    {category: 'smartphone',
        producer: 'Samsung',
        name: 'Galaxy A12',
        price: '11 990',
        img: '',
        count: '14',
        color: 'black',
        rom: '32',
        ram: '3'},
    {category: 'smartphone',
        producer: 'Samsung',
        name: 'Galaxy S21',
        price: '67 990',
        img: '',
        count: '7',
        color: '',
        rom: '128',
        ram: '8'},
    {category: 'smartphone',
        producer: 'Samsung',
        name: 'Galaxy A31',
        price: '68 990',
        img: '',
        count: '13',
        color: 'white',
        rom: '256',
        ram: '8'},
    {category: 'smartphone',
        producer: 'Samsung',
        name: 'Galaxy A51',
        price: '55 990',
        img: '',
        count: '4',
        color: 'white',
        rom: '128',
        ram: '8'}
]



const Products = () => {
    return (
        <div className={s.Products}>
            <div className={s.mainContainer}>
                <h2>Смартофоны и планшеты</h2>
                <div className={s.productsWrapper}>
                    {dataProducts.map((el) => (
                        <div className={s.product}>
                            <div className={s.photo}>
                                <img src="https://via.placeholder.com/100x200.png/77BD1B" alt=""/>
                            </div>
                            <div className={s.description}>{el.producer} {el.name} {el.rom}+{el.ram}</div>
                            <div className={s.price}>{el.price} ₽</div>
                            <div className={s.icons}>
                                <div className={s.topIcons}>
                                    <FavoriteBorderIcon/>
                                    <FavoriteBorderIcon/>
                                </div>
                                <div className={s.bottomIcon}>
                                    <FavoriteBorderIcon/>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Products;

