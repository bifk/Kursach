import React, {useContext} from 'react';
import {Button, Card, Container, Form, Image} from "react-bootstrap";
import DoctorsList from "../components/DoctorsList";
import {
    CONTACTS_ROUTE,
    DOCTORS_ROUTE,
    HOSPITAL_ROUTE,
    OTDELENIE_ROUTE,
    PLATA_ROUTE,
    ZAPIC_ROUTE
} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../index";

const Hospital = () => {

    const history = useHistory()
    const {user} = useContext(Context)
    return (
        <Container className="ms-auto align-items-center mt-5">
            <h2 className="d-flex mb-4 flex-wrap justify-content-center">Добро пожаловать на сайт поликлиники "Афонька"</h2>
            <Image className="d-flex flex-wrap justify-content-center me-4 " style={{borderRadius: 10, maxHeight: 500, minWidth: window.innerWidth - 610, display: "block"}} src="https://ltdfoto.ru/images/2022/12/19/maket-min-1200x798.jpg"

            ></Image>

        </Container>
    );
};

export default Hospital;