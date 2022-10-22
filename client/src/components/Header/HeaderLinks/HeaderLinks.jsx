import React from "react";
import s from "./HeaderLinks.module.scss"

const HeaderLinks = (props) => {


    return (
        <div className={s.links}>
            {props.linkList.map((el,i) => (
                <div className={s.link}>{`${el} ${i+1}`}</div>
            ))}
        </div>
    );



}

export default HeaderLinks;