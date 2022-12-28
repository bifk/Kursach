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
import ShowPriems from "./modals/ShowPriems";
import {fetchOnePriemId} from "../http/priemAPI";


const DoctorItem = observer(({vrach1}) => {

    const {vrach} = useContext(Context)
    const {priem} = useContext(Context)
    const [otd, setOtd] = useState('')
    const [dol, setDol] = useState('')
    const [ras, setRas] = useState('')
    const [isPriem, setIsPriem] = useState(false)
    const [changeDolVisible, setchangeDolVisible] = useState(false)
    const [changeRaslVisible, setchangeRasVisible] = useState(false)
    const [showPriemslVisible, setshowPriemsVisible] = useState(false)

    useEffect(() => {
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
    }, [])


    const priems = () => {
        fetchOnePriemId(vrach1.id).then(data => {
            priem.setPriems(data)
        })
    }

    return (
        <Container className="mt-1">
            <Card style={{width: 1150,}} border={"dark"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center">
                        Фамилия: {vrach1.familia}<br/>
                        Имя: {vrach1.imya}<br/>
                        Отчество: {vrach1.otchestvo}<br/>
                        Номер телефона: {vrach1.nomer_telefona}<br/>
                        Отделение: {otd}<br/>
                        Должность: {dol}<br/>
                        Расписание: {ras}<br/>
                        Кабинет: {vrach1.cabinet}<br/>
                    </div>
                </div>
                <div className=" mb-2 me-4 ms-auto">
                    <Button
                        variant={"outline-dark"}
                        className="me-2"
                        style={{width: 200}}
                        onClick={() => {
                            vrach.setId(vrach1.id);
                            priems()
                            setshowPriemsVisible(true)

                        }}>
                    Посмотреть приемы</Button>
                <Button
                    variant={"outline-dark"}
                    className="me-2"
                    style={{width: 200}}
                    onClick={() => {
                        vrach.setId(vrach1.id);
                        vrach.setTime(vrach1.SheduleId)
                        setchangeRasVisible(true)
                    }}
                >Изменить расписание</Button>
                <Button
                    variant={"outline-dark"}
                    onClick={() => {
                        vrach.setId(vrach1.id);
                        vrach.setTime(vrach1.SheduleId)
                        setchangeDolVisible(true)
                    }}
                    style={{width: 200}}
                >Изменить должность</Button>
                </div>
            </Card><br/>
            <ChangeDolznost show={changeDolVisible} onHide={() => setchangeDolVisible(false)}/>
            <ChangeRaspisanie show={changeRaslVisible} onHide={() => setchangeRasVisible(false)}/>
            <ShowPriems show={showPriemslVisible} onHide={() => setshowPriemsVisible(false)}/>
        </Container>
    );
});

export default DoctorItem;