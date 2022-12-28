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
import CreateAnalizi from "./modals/CreateAnalizi";


const ZapisiItem = ({zapic1}) => {
    const {vrach} = useContext(Context)
    const {pacient} = useContext(Context)
    const {user} = useContext(Context)
    const {zapic} = useContext(Context)
    const [cabinet, setCabinet] = useState(1)
    const [familia, setFamilia] = useState('')
    const [imya, setImya] = useState('')
    const [otchestvo, setOtchestvo] = useState('')
    const [nomer, setNomer] = useState('')
    const [date, setDate] = useState(5)
    const [time, setTime] = useState()
    const [analiziVisible, setAnaliziVisible] = useState(false)
    const [dol, setDol] = useState('')


    const cancelZapic = async () => {
        let isSure = window.confirm('Вы уверены, что хотите отменить запись?')
        if(isSure)
            cancelZapis(zapic1.id).then(message => {
                alert('Запись успешно удалена')
            })
    }

    const setVrach = async (data) => {

        setCabinet(data.cabinet)
        setFamilia(data.familia);
        setImya(data.imya)
        setOtchestvo(data.otchestvo)
        setNomer(data.nomer_telefona)
        fetchOneDolznostId(data.PositionId).then(data1 =>{
            setDol(data1.name)
        })
    }
    useEffect(() => {

    fetchVrachId(zapic1.DoctorId).then(data => {
        setVrach(data).then()
        let partsD = zapic1.date.toString().split('-')
        let partsT = zapic1.time.toString().split(':')
        setDate(partsD[2] + '.' + partsD[1] + '.' + partsD[0])
        setTime(partsT[0] + ':' + partsT[1])
    })
    }, [])


    return (
        <Container className="mt-1">
            <Card style={{width: 1150,}} border={"dark"}>
                <div className="mt-1 d-flex justify-content-between align-items-center">

                    <div className=" d-flex align-items-center">
                        Дата записи: {date}<br/>
                        Время записи: {time}<br/>
                        Врач: {familia + ' ' + imya + ' ' + otchestvo}<br/>
                        Должность: {dol}<br/>
                        Номер телефона врача: {nomer}<br/>
                        Кабинет: {cabinet}

                    </div>

                </div>
                <div className="ms-auto">
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
                >Сдать анализы</Button>
                <Button
                    className="ms-auto me-3 mb-4"
                    variant={"outline-danger"}
                    style={{width: 300}}
                    onClick={cancelZapic}
                >Отменить запись</Button></div>
                <CreateAnalizi show={analiziVisible} onHide={() => setAnaliziVisible(false)} />
            </Card><br/>
        </Container>
    );
};

export default ZapisiItem;