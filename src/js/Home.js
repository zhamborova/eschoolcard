import React, {Component} from 'react';
import Nav from "./Nav";
import "../css/Home.css"
import Button from "react-bootstrap/es/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
    render() {
        return (
            <React.Fragment>

            <Nav/>
            <div className="pt-md-2 pb-md-2 scroll align-items-center">
                <div className="container-fluid m-0">
                <div className="row d-flex flex-sm-column flex-md-row m-0 justify-content-center ">
                    <div className="col-4 msc d-flex p-4 ">
                       <img src="https://eschoolcard.ru/img/logo-big.fbb329ab.svg"/>

                    </div>
                    <div className="col-4 msc mob d-flex justify-content-center align-items-center flex-column">
                        <h5 className="mt-2 mobile">Mobile Application</h5>

                        <a href="https://play.google.com/store/apps?hl=ru"><img  className="logos" alt="https://play.google.com/store/apps?hl=ru"
                                                                                 src="https://eschoolcard.ru/img/google-play.345efea9.svg" /></a>
                       <a href="https://www.apple.com/ru/ios/app-store/"> <img className="logos" alt="https://www.apple.com/ru/ios/app-store/"
                                                                               src="https://eschoolcard.ru/img/app-store.3a399072.svg" /></a>
                    </div>
                    <div className="col-4 msc d-flex flex-column ">
                        <h5 className="mt-2 mobile">Account Setup</h5>
                        <input className="phone" type="text" placeholder="Phone" />
                        <div className="container-fluid d-flex p-0 ">
                        <input type="checkbox" className="mt-2 ml-2 "/>
                            <p className="terms">Согласен с <a href="#">
                                политикой обработки конфиденциальной <span className="txt-align p-0 m-0">информации</span></a></p>
                        </div>
                        <Button className="btn-dark"> Get code </Button>
                    </div>
                </div>
                </div>
            </div>
                <div className="address text-center">
                    <p>Услуги предоставляются ООО "Инфосервис". ИНН:0725026503 ОГРН:1190726001729</p>
                     <p> 360903, КБР, г.Нальчик, с. Хасанья, ул. Исламская, д. 9</p>
                    <a  href="tel:+79887200307" className="contact mr-5">

                        <FontAwesomeIcon icon={faPhone} className="mr-1"/>
                        +7(988) 720-03-08
                    </a>

                    <a href="#" className="contact ml-5" >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-1"/>
                        support@eschoolcard.ru
                    </a>


                </div>


                <div className="scroll-2">
                </div>

            </React.Fragment>
        );
    }
}


export default Home;