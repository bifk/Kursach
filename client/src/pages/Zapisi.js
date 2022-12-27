import React, {useContext} from 'react';
import {Card, Container, Form} from "react-bootstrap";
import {Context} from "../index";
import ZapisiList from "../components/ZapisiList";
import {observer} from "mobx-react-lite";
import ZapisiVrachList from "../components/ZapisiVrachList";

const Zapisi = observer(() => {
    const {user} = useContext(Context)

    return (
        <Container className="d-flex ms-auto align-items-center"
                   style={{height: window.innerHeight - 54}}
        ><Card style ={{width: window.innerWidth - 100, height: window.innerHeight - 100}} className="p-5 me-1">
            <h2 style={{display: 'inline'}} className="m-auto mt-1">{user.therole === 'pacient' ? 'Записи к врачу' : 'Записи пациентов'}</h2>
            <Form style={{ height: window.innerHeight - 200, fontSize: 40}} className="d-flex flex-column mt-1">
                {user.therole === 'pacient' ? <ZapisiList/> : <ZapisiVrachList/>}
            </Form>
        </Card>


        </Container>
    );
});

export default Zapisi;