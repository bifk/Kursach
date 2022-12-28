import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {fetchOneDolznostId} from "../http/DolznostAPI";
import {createVrach} from "../http/vrachAPI";
import {observer} from "mobx-react-lite";
import {fetchOneOtdelenieId} from "../http/OtdelenieAPI";
import {fetchOneRaspisanieId} from "../http/raspisanieAPI";
import {Context} from "../index";
import CreateUlica from "./modals/CreateUlica";
import ChangeDolznost from "./modals/ChangeDolznost";
import ChangeRaspisanie from "./modals/ChangeRaspisanie";
import {fetchPacientId} from "../http/pacientAPI";


const PriemItem = observer(({priem}) => {

    const {vrach} = useContext(Context)
    const [familia, setFamilia] = useState('')
    const [imya, setImya] = useState('')
    const [otchestvo, setOtchestvo] = useState('')



    useEffect(() => {
        fetchPacientId(priem.PacientId).then(data => {
            setFamilia(data.familia)
            setImya(data.imya)
            setOtchestvo(data.otchestvo)
        })
    }, [])

    return (
        <Container className="mt-1">
            <Card style={{width: "auto",}} border={"light"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center">
                        Дата приема: {priem.date + ' '}
                        Пациент: {familia + ' ' + imya + ' ' + otchestvo}
                    </div>
                </div>
                <div className=" mb-2 me-4 ms-auto">
                </div>
            </Card><br/>
        </Container>
    );
});

export default PriemItem;