import React from 'react';
import {Card, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Contacts = observer(() => {
    return (
        <Container className="d-flex mt-1 ms-auto align-items-center"
                   style={{height: window.innerHeight - 64}}
        ><Card style ={{width: window.innerWidth - 100, height: window.innerHeight - 100}} className="p-5 me-1">
            <h2 style={{display: 'inline'}} className="m-auto mt-1">Контактные данные поликлиники "Афонька"</h2><br/>
            <Form style={{ height: window.innerHeight - 200, fontSize: 40}} className="d-flex flex-column ">
                <Form.Label >Главный врач</Form.Label>
                <Form.Text
                >Кожуров Иван Александрович</Form.Text><br/>
                <Form.Label>Заместитель главного врача</Form.Label>
                <Form.Text
                >Туралин Арсений Сергеевич</Form.Text><br/>
                <Form.Label>Электронная почта больницы</Form.Label>
                <Form.Text
                >serega18102002@gmail.com</Form.Text><br/>
                <Form.Label>Контактные телефоны</Form.Label>
                <Form.Text
                >+79133360408, +79618647691</Form.Text><br/>
            </Form>
        </Card>


        </Container>
    );
});

export default Contacts;