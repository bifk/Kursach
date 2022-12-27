import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {data1} from "./Auth";
import {Context} from "../index";
import DatePicker from "../components/DatePicker";
import {observer} from "mobx-react-lite";
import {fetchDolznost} from "../http/DolznostAPI";

const Pacient = observer(() => {
    const {pacient} = useContext(Context)
    const {user} = useContext(Context)
    const {adress} = useContext(Context)
    const {gorod} = useContext(Context)
    const {ulica} = useContext(Context)







    return (
        <Container className="d-flex ms-auto align-items-center"
                   style={{height: window.innerHeight - 54}}
        ><Card style ={{width: window.innerWidth - 200, height: window.innerHeight - 200}} className="p-5 me-1">
            <h2 className="m-auto mt-3">Личная информация</h2>
            <Form className="d-flex flex-column">

                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                    disabled
                    value={pacient.familiaa}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    disabled
                    value={pacient.imya}
                    className="mb-3 "
                ></Form.Control>
                <Form.Label>Отчество</Form.Label>
                <Form.Control
                    disabled
                    value={pacient.otchestvo}
                    className="mb-3"
                ></Form.Control>


                <Form.Label>Дата рождения</Form.Label>
                <Form.Control
                    disabled
                    type={"date"}
                    value={pacient.dob}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Адрес проживания</Form.Label>
                <Form.Control
                    disabled
                    value={'гор. ' + gorod.nazvanie + ' ул. '+ ulica.nazvanie + ' д. ' + adress.dom + ' кв. ' + adress.kvartira}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    disabled
                    value={pacient.email}
                    className="mb-3"
                ></Form.Control>

                <Form.Label>Номер полиса</Form.Label>
                <Form.Control
                    disabled
                    value={pacient.nomer}
                    className="mb-3"
                ></Form.Control>

            </Form>
        </Card>


        </Container>
    );
});

export default Pacient;