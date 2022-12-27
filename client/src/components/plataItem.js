import React, {useContext} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {Context} from "../index";
import {createPlata_pacient} from "../http/plata_pacientAPI";


const PlataItem = ({plata}) => {
    const {user} = useContext(Context)
    const {pacient} = useContext(Context)

    const click = async () => {
        try {
            console.log(pacient.id)
            createPlata_pacient(pacient.id, plata.id).then(data => {
                if (data !== undefined)
                    alert('Вы успешно купили платную услугу')
            })
        } catch (e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="mt-1">
            <Card style={{ width: 'auto', height: 'auto'}} border={"dark"}>
                <div className="align-items-center">
                    Название: {plata.name}<br/>
                    Цена: {plata.price}<br/>
                </div>
                <div>Описание: {plata.description}</div>
                {user.isAuth && user.therole === 'pacient' ? <Button
                    style={{width:200}}
                    className="ms-auto me-3 mt-4 mb-4"
                    variant={"outline-dark"}
                    onClick={click}
                >Купить</Button> : ''}
            </Card><br/>
        </Container>
    );
};

export default PlataItem;