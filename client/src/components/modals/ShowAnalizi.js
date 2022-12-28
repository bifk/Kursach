import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createUlica} from "../../http/ulicaAPI";
import {createZapic} from "../../http/zapicAPI";
import {Context} from "../../index";
import AnaliziList from "../AnaliziList";

const ShowAnalizi = ({show, onHide, analizi1}) => {
    const {vrach} = useContext(Context)
    const {pacient} = useContext(Context)

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')




    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Анализы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AnaliziList analizi1={analizi1}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowAnalizi;