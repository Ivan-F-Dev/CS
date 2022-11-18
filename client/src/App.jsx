import React, {useEffect, useState} from "react";
import s from "./App.module.scss"
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/Footer/FooterMobile/FooterMobile";
import HeaderMobile from "./components/Header/MobileHeader/HeaderMobile";



const App = () => {

    const [isDesktop,setIsDesktop] = useState(true)


//Переход десктоп/мобайл ++
    const resizeListener = () => {
        if (window.innerWidth > 715 && localStorage.isDesktop === 'false') {
            localStorage.isDesktop = 'true'
            setIsDesktop(true)
        }
        if (window.innerWidth <= 715 && localStorage.isDesktop === 'true') {
            localStorage.isDesktop = 'false'
            setIsDesktop(false)
        }
    }
    useEffect(() => {
        window.innerWidth > 715 ? localStorage.isDesktop = 'true' : localStorage.isDesktop = 'false'
        window.addEventListener("resize", resizeListener)
    },[])
//Переход десктоп/мобайл --

    return (
        <div className={s.App}>
            {isDesktop ? <Header/> : <HeaderMobile/>}
            <Categories/>
            <Products/>
            {isDesktop ? <Footer/> : <FooterMobile/>}

        </div>
    );
}

export default App;