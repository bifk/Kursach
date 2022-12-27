import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {fetchOneDolznostId} from "../http/DolznostAPI";
import {createVrach, fetchVrach} from "../http/vrachAPI";
import {observer} from "mobx-react-lite";
import {fetchOneOtdelenieId} from "../http/OtdelenieAPI";
import {fetchOneRaspisanieId} from "../http/raspisanieAPI";
import CreateZapic from "./modals/CreateZapic";
import {Context} from "../index";


const ZapicItem = observer(({vrach1}) => {
    const {vrach} = useContext(Context)
    const {user} = useContext(Context)
    const [otd, setOtd] = useState('')
    const [dol, setDol] = useState('')
    const [ras, setRas] = useState('')
    const [zapicVisible, setzapicVisible] = useState(false)
    if (vrach1.PositionId !== null)
        fetchOneDolznostId(vrach1.PositionId).then(data => {
            setDol(data.name)
        })

    if (vrach1.DepartmentId !== null)
        fetchOneOtdelenieId(vrach1.DepartmentId).then(data => {
            setOtd(data.name)
        })

    if (vrach1.SheduleId !== null)
        fetchOneRaspisanieId(vrach1.SheduleId).then(data => {
            setRas(data.den + ' ' + data.time);
        })





    return (
        <Container className="mt-1">
            <Card style={{width: 1150,}} border={"dark"}>
                <div className="mt-1 d-flex justify-content-between align-items-center">

                    <div className=" d-flex align-items-center">
                        Фамилия: {vrach1.familia}<br/>
                        Имя: {vrach1.imya}<br/>
                        Отчество: {vrach1.otchestvo}<br/>
                        Номер телефона: {vrach1.nomer_telefona}<br/>
                        Отделение: {otd}<br/>
                        Должность: {dol}<br/>
                        Расписание: {ras}<br/>
                        Кабинет: {vrach1.cabinet}<br/>

                    </div>

                </div>{ user.isAuth && user.therole ==='pacient' ?
                <Button
                    className="ms-auto me-3 mb-4"
                    variant={"outline-success"}
                    style={{width: 300}}
                    onClick={() => {setzapicVisible(true); vrach.setCabinet(vrach1.cabinet); vrach.setId(vrach1.id); console.log(vrach.id)}}
                >Записаться на прием</Button> : ''}
                <CreateZapic show={zapicVisible} onHide={() => setzapicVisible(false)}/>
                <div></div>

            </Card><br/>
        </Container>
    );
});

export default ZapicItem;