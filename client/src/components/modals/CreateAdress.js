import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createAdress} from "../../http/adressAPI";
import {createUlica} from "../../http/ulicaAPI";
import {Context} from "../../index";
import GorodItem from "../GorodItem";
import UlicaItem from "../UlicaItem";

const CreateAdress = ({show, onHide}) => {
    const {pacient} = useContext(Context)
    const [dom, setDom] = useState('')
    const [kvartira, setKvartira] = useState('')
    const [ulica, setUlica] = useState('')
    const [gorod, setGorod] = useState('')



    const addUlica = () => {
        pacient.setDom(dom)
        pacient.setKvartira(kvartira)
        pacient.setUlica(ulica)
        pacient.setGorod(gorod)
        onHide()
    }



    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить адресс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <GorodItem/>
                    <Form.Control
                        value={ulica}
                        onChange={e => setUlica(e.target.value)}
                        className="mt-3"
                        placeholder="Введите улицу">

                    </Form.Control>
                    <Form.Control
                        value={dom}
                        onChange={e => setDom(e.target.value)}
                        className="mt-3"
                        placeholder="Введите дом">

                    </Form.Control>
                    <Form.Control
                        value={kvartira}
                        onChange={e => setKvartira(e.target.value)}
                        className="mt-3"
                        placeholder="Введите квартиру">

                    </Form.Control>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addUlica}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAdress;