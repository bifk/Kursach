import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createAdress} from "../../http/adressAPI";
import {createUlica} from "../../http/ulicaAPI";
import {Context} from "../../index";
import GorodItem from "../GorodItem";
import UlicaItem from "../UlicaItem";
import DolznostList from "../DolznostList";
import {fetchOneDolznost, fetchOneDolznostId} from "../../http/DolznostAPI";
import {changeVrachDol, changeVrachRas} from "../../http/vrachAPI";
import RaspisanieList from "../RaspisanieList";
import {fetchOneRaspisanie, fetchOneRaspisanieId} from "../../http/raspisanieAPI";
import {fetchOneOtdelenieId} from "../../http/OtdelenieAPI";
import {fetchOnePriemId} from "../../http/priemAPI";
import PriemList from "../PriemList";
import {observer} from "mobx-react-lite";

const ShowPriems = observer(({show, onHide}) => {
    const {vrach} = useContext(Context)
    const {priem} = useContext(Context)
    const {dolznost} = useContext(Context)
    const {raspisanie} = useContext(Context)
    const [dom, setDom] = useState('')
    const [dol, setDol] = useState('')

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Приемы врача
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PriemList/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ShowPriems;