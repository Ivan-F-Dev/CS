import React, {useState} from "react";
import s from "./Header.module.scss"
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import TextField from "@material-ui/core/TextField";
import img from "./../../imgs/titleFine.png"
import MUIMenu from "./MUIMenu/MUIMenu";
import Button from "@material-ui/core/Button";

const Header = () => {

    const [Links, setLinks] = useState(['Link','Link','Link','Link','Link','Link'])

    return (
        <div className={s.Header}>
            <div className={s.mainContainer}>
                <div className={s.topContainer}>
                    <div className={s.title_menuContainer}>
                        <div className={s.title}>
                            <img src={img} width="159" height="61" alt="lorem"/>
                        </div>
                        <div className={s.menu}>
                            <MUIMenu/>
                        </div>
                    </div>
                    <div className={s.search}>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div className={s.buttonsContainer}>
                        <div className={s.button}><Button size="large">button1</Button></div>
                        <div className={s.button}><Button size="large">button2</Button></div>
                        <div className={s.button}><Button size="large">button3</Button></div>
                        <div className={s.button}><Button size="large">button4</Button></div>
                    </div>
                </div>
                {Links.length > 0
                    ? (
                        <div className={s.bottomContainer}>
                            <HeaderLinks linkList={Links}/>
                        </div>
                    )
                    : null
                }

            </div>
        </div>
    );
}

export default Header;