import React, {useContext} from 'react';
import {Card, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Vrach = observer(() => {
    const {vrach} = useContext(Context)


    return (
        <Container className="d-flex ms-auto align-items-center"
                   style={{height: window.innerHeight - 54}}
        ><Card style ={{width: window.innerWidth - 200, height: window.innerHeight - 140}} className="p-5 me-1">
            <h2 className="m-auto mt-2">Личная информация</h2>
            <Form className="d-flex flex-column">

                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.familia}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.imya}
                    className="mb-3 "
                ></Form.Control>
                <Form.Label>Отчество</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.otchestvo}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Номер телефона</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.nomer}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Кабинет</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.cabinet}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Должность</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.dolznost}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Отделение</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.otdelenie}
                    className="mb-3"
                ></Form.Control>
                <Form.Label>Расписание</Form.Label>
                <Form.Control
                    disabled
                    value={vrach.raspisanie}
                    className="mb-3"
                ></Form.Control>


            </Form>
        </Card>


        </Container>
    );
});

export default Vrach;