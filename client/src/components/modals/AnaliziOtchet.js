import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createUlica} from "../../http/ulicaAPI";
import {createZapic} from "../../http/zapicAPI";
import {Context} from "../../index";
import AnaliziList from "../AnaliziList";
import {updateAnalizi} from "../../http/analiziAPI";

const AnaliziOtchet = ({show, onHide}) => {
    const {vrach} = useContext(Context)
    const {analizi} = useContext(Context)

    const [result, setResult] = useState('')



    const click = async () => {
        updateAnalizi(analizi.id, result).then(() =>{
            alert('Вы успешно добавили отчет по анализам')
            setResult('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Отчет по анализам
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={result}
                        onChange={e => setResult(e.target.value)}
                        className="mt-3"
                        placeholder="Введите результаты анализова">

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={click}>Сделать отчет</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AnaliziOtchet;