import React from 'react';
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

const Hospital = () => {

    const history = useHistory()

    return (
        <Container className="ms-auto align-items-center mt-5">
            <h2 className="d-flex mb-4 flex-wrap justify-content-center">Добро пожаловать на сайт поликлиники "Афонька"</h2>
            <Image className="d-flex flex-wrap justify-content-center me-4 " style={{borderRadius: 10, maxHeight: 500, minWidth: window.innerWidth - 610, display: "block"}} src="https://ltdfoto.ru/images/2022/12/19/maket-min-1200x798.jpg"

            ></Image>
            <Button onClick={() => history.push(ZAPIC_ROUTE)} variant="outline-dark" className="mt-3 ms-2 me-4" style={{width: 303, height: 100, fontSize: 25}}>Записаться к врачу</Button>
            <Button onClick={() => history.push(CONTACTS_ROUTE)} variant="outline-dark" className="mt-3 me-4" style={{width: 303, height: 100, fontSize: 25}}>Контакты</Button>
            <Button onClick={() => history.push(OTDELENIE_ROUTE)} variant="outline-dark" className="mt-3 me-4" style={{width: 303, height: 100, fontSize: 25}}>Отделения</Button>
            <Button onClick={() => history.push(PLATA_ROUTE)} variant="outline-dark" className="mt-3" style={{width: 303, height: 100, fontSize: 25}}>Платные услуги</Button>

        </Container>
    );
};

export default Hospital;