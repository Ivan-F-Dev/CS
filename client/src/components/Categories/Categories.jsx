import React from "react";
import s from "./Categories.module.scss";
import ps from '../../imgs/cats/ps.png'


const Categories = () => {

    let arr = [
        {
            title: 'Бытовая техника',
            img: 'washingMachine'
        },
        {
            title: 'Игры и развлечения',
            img: 'ps'
        },
        {
            title: 'Телевизоры, аудио, видео',
            img: 'tv'
        },
        {
            title: 'Техника для кухни',
            img: 'tech'
        },
        {
            title: 'Игры и развлечения',
            img: 'ps'
        },
        {
            title: 'Ноутбуки и компьютеры',
            img: 'laptop'
        },
        {
            title: 'Фото и видеотехника',
            img: 'photo'
        }
        ]

    return (
        <div className={s.Categories}>
            <div className={s.mainContainer}>

                {arr.map((el,i)=> (
                    <div key={i} className={s.item}>
                        <div className={s.wrapper}>
                            <div className={s.itemImgWrapper}><img src={require(`./../../imgs/cats/${el.img}.png`)} alt=""/></div>
                            <div className={s.itemTitle}>{el.title}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Categories;