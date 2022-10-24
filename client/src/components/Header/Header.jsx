import React, {useState} from "react";
import s from "./Header.module.scss"
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import TextField from "@material-ui/core/TextField";
import img from "./../../imgs/titleFine.png"
import MUIMenu from "./MUIMenu/MUIMenu";
import Button from "@material-ui/core/Button";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BarChartIcon from '@material-ui/icons/BarChart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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
                        <div className={s.button}>
                            <Button size="large">
                                <div className={s.buttonName}><PermIdentityIcon/><div>Профиль</div></div>
                            </Button>
                        </div>
                        <div className={s.button}>
                            <Button size="large">
                                <div className={s.buttonName}><BarChartIcon/><div>Профиль</div></div>
                            </Button>
                        </div>
                        <div className={s.button}>
                            <Button size="large">
                                <div className={s.buttonName}><FavoriteBorderIcon/><div>Профиль</div></div>
                            </Button>
                        </div>
                        <div className={s.button}>
                            <Button size="large">
                                <div className={s.buttonName}><ShoppingCartOutlinedIcon/><div>Профиль</div></div>
                            </Button>
                        </div>
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