import React, {useContext, useEffect} from 'react';
import {Card, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchOtdelenies} from "../http/OtdelenieAPI";
import OtdelenieList from "../components/OtdelenieList";
import {useParams} from "react-router-dom";

const Otdelenie = observer(() => {
    const {otdelenie} = useContext(Context)
    const {user} = useContext(Context)
    const {id} = useParams()


    return (
        <Container className="d-flex ms-auto align-items-center"
                   style={{height: window.innerHeight - 54}}

        ><Card style ={{width: window.innerWidth - 100, height: window.innerHeight - 100}} className="p-5 me-1">
            <h2 style={{display: 'inline'}} className="m-auto mt-1  mb-2">Отделения</h2>
            <Form style={{ height: window.innerHeight - 200, fontSize: 40}} className="d-flex flex-column mt-1">
                <OtdelenieList/>
            </Form>

        </Card>


        </Container>
    );
});

export default Otdelenie;