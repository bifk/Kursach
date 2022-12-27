import React, {useEffect, useState} from 'react';
import {Card, Col, Container} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {fetchOneDolznostId} from "../http/DolznostAPI";
import {createVrach} from "../http/vrachAPI";
import {observer} from "mobx-react-lite";
import {fetchOneOtdelenieId} from "../http/OtdelenieAPI";
import {fetchOneRaspisanieId} from "../http/raspisanieAPI";


const DoctorItem = observer(({vrach}) => {


    const [otd, setOtd] = useState('')
    const [dol, setDol] = useState('')
    const [ras, setRas] = useState('')
    useEffect(() => {
    if (vrach.PositionId !== null)
        fetchOneDolznostId(vrach.PositionId).then(data => {
            setDol(data.name)
        })

    if (vrach.DepartmentId !== null)
        fetchOneOtdelenieId(vrach.DepartmentId).then(data => {
            setOtd(data.name)
        })

    if (vrach.SheduleId !== null)
        fetchOneRaspisanieId(vrach.SheduleId).then(data => {
            setRas(data.den + ' ' + data.time);
        })
    }, [])

    return (
        <Container className="mt-1">
            <Card style={{width: 1150,}} border={"dark"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center">
                        Фамилия: {vrach.familia}<br/>
                        Имя: {vrach.imya}<br/>
                        Отчество: {vrach.otchestvo}<br/>
                        Номер телефона: {vrach.nomer_telefona}<br/>
                        Отделение: {otd}<br/>
                        Должность: {dol}<br/>
                        Расписание: {ras}<br/>
                        Кабинет: {vrach.cabinet}<br/>
                    </div>
                </div>
                <div></div>
                <br/>
            </Card><br/>
        </Container>
    );
});

export default DoctorItem;