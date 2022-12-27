import React from 'react';
import {Card, Container, Form} from "react-bootstrap";
import ZapicList from "../components/ZapicList";

const Zapic = () => {
    return (
        <Container className="d-flex ms-auto align-items-center"
                   style={{height: window.innerHeight - 54}}
        ><Card style ={{width: window.innerWidth - 100, height: window.innerHeight - 100}} className="p-5 me-1">
            <h2 style={{display: 'inline'}} className="m-auto mt-1  mb-2">Записаться к врачу</h2>
            <Form style={{ height: window.innerHeight - 200, fontSize: 40}} className="d-flex flex-column mt-1">
            <ZapicList/>
            </Form>
        </Card>


        </Container>
    );
};

export default Zapic;