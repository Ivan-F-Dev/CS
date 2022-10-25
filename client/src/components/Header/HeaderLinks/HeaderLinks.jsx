import React from "react";
import s from "./HeaderLinks.module.scss"

const HeaderLinks = (props) => {


    return (
        <div className={s.links}>
            {props.linkList.map((el) => (
                <a className={s.link}>{`${el}`}</a>
            ))}
        </div>
    );



}

export default HeaderLinks;