import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {fetchPacientId} from "../http/pacientAPI";
import {Context} from "../index";
import ShowAnalizi from "./modals/ShowAnalizi";
import AnaliziOtchet from "./modals/AnaliziOtchet";


const AnaliziItem = ({analizi1}) => {
    const {analizi} = useContext(Context)
    const {zapic} = useContext(Context)
    const [familia, setFamilia] = useState('')
    const [imya, setImya] = useState('')
    const [othcestvo, setOtchestvo] = useState('')
    const [analiziVisible, setAnaliziVisible] = useState(false)
    console.log(analizi1)

    return (
        <Container className="mt-1">
            <Card style={{ width: "auto",}}>
                <div className="mt-1 d-flex justify-content-between align-items-center">

                    <div className="align-items-center">
                        Тип анализов: {analizi1.type}<br/>
                        Результаты: {analizi1.results === null ? 'Нет отчета' : analizi1.results}
                    </div>
                </div>
                <div className="ms-auto me-3 mb-3"><Button
                    variant="outline-info"

                    onClick={() => {
                        analizi.setId(analizi1.id)
                        setAnaliziVisible(true)
                    }}
                >{analizi1.results === null ? 'Сделать отчет' : 'Изменить отчет'}</Button></div>

            </Card>
            <AnaliziOtchet show={analiziVisible} onHide={() => setAnaliziVisible(false)} />
        </Container>

    );
};

export default AnaliziItem;