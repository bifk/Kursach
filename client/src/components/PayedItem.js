import React, {useContext} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {Context} from "../index";
import {createPlata_pacient} from "../http/plata_pacientAPI";


const PayedItem = ({plata}) => {
    const {user} = useContext(Context)
    const {pacient} = useContext(Context)

    if (plata !== undefined)
        return (
            <Container className="mt-1">
                <Card style={{ width: 'auto', height: 'auto'}} border={"dark"}>
                    <div  className="text-black-50 mt-1 d-flex justify-content-between align-items-center">


                    </div>
                    <div className="align-items-center">
                        Название: {plata.name}<br/>
                        Цена: {plata.price}<br/>
                    </div>
                    <div>Описание: {plata.description}</div>
                </Card><br/>
            </Container>
        );
};

export default PayedItem;