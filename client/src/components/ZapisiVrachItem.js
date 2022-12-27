import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {fetchOneDolznostId} from "../http/DolznostAPI";
import {createVrach, fetchVrach, fetchVrachId} from "../http/vrachAPI";
import {observer} from "mobx-react-lite";
import {fetchOneOtdelenieId} from "../http/OtdelenieAPI";
import {fetchOneRaspisanieId} from "../http/raspisanieAPI";
import CreateZapic from "./modals/CreateZapic";
import {Context} from "../index";
import {cancelZapis, fetchZapisiPac, fetchZapisiVrach} from "../http/zapicAPI";
import {fetchPacient, fetchPacientId} from "../http/pacientAPI";
import CreateOtchet from "./modals/CreateOtchet";
import CreateAnalizi from "./modals/CreateAnalizi";
import {fetchAnalizi} from "../http/analiziAPI";
import {fetchOneKartPacId} from "../http/medKartAPI";


const ZapisiVrachItem = ({zapic1}) => {
    const {vrach} = useContext(Context)
    const {pacient} = useContext(Context)
    const {user} = useContext(Context)
    const {zapic} = useContext(Context)
    const [familia, setFamilia] = useState('')
    const [imya, setImya] = useState('')
    const [otchestvo, setOtchestvo] = useState('')
    const [nomer, setNomer] = useState('')
    const [date, setDate] = useState(5)
    const [time, setTime] = useState()
    const [otchetVisible, setotchetVisible] = useState(false)
    const [analiziVisible, setAnaliziVisible] = useState(false)


    const cancelZapic = async () => {

    }
    let analizi
    const setPacient = async (data) => {
        setFamilia(data.familia);
        setImya(data.imya)
        setOtchestvo(data.otchestvo)
        setNomer(data.nomer_telefona)
    }

    useEffect(() => {
        fetchPacientId(zapic1.PacientId).then(data => {
            setPacient(data).then()
            let partsD = zapic1.date.toString().split('-')
            let partsT = zapic1.time.toString().split(':')
            setDate(partsD[2] + '.' + partsD[1] + '.' + partsD[0])
            setTime(partsT[0] + ':' + partsT[1])
        })
    }, [])


    return (
        <Container className="mt-1">
            <Card style={{width: 1150,}} border={"dark"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">

                        Дата записи: {date}<br/>
                        Время записи: {time}<br/>
                        Пациент: {familia + ' ' + imya + ' ' + otchestvo}<br/>
                        Номер телефона пациента: {nomer}<br/>


                </div>
                <div className="ms-auto mt-3">
                    <Button
                    className="ms-auto me-3 mb-4"
                    variant={"outline-info"}
                    style={{width: 300}}
                    onClick={() => {
                        zapic.setId(zapic1.id)
                        zapic.setPacientId(zapic1.PacientId);
                        zapic.setDoctorId(zapic1.DoctorId);
                        setAnaliziVisible(true);
                    }}
                >Назначить анализы</Button>
                <Button
                    className="ms-auto me-3 mb-4"
                    variant={"outline-info"}
                    style={{width: 300}}
                    onClick={() => {
                        setotchetVisible(true);
                        zapic.setDat(zapic1.date);
                        zapic.setId(zapic1.id)
                        zapic.setPacientId(zapic1.PacientId);
                        zapic.setDoctorId(zapic1.DoctorId)
                    }}
                >Сделать отчет</Button></div>
            </Card><br/>
            <CreateOtchet show={otchetVisible} onHide={() => setotchetVisible(false)} />
            <CreateAnalizi show={analiziVisible} onHide={() => setAnaliziVisible(false)} />
        </Container>
    );
};

export default ZapisiVrachItem;