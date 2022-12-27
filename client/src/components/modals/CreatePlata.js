import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createPlata} from "../../http/plataAPI";

const CreatePlata = ({show, onHide}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')


    const addPlata = () => {
        createPlata({name, price, description}).then(data => {
            alert('Платная услуга успешно добавлена')
            setName('')
            setPrice('')
            setDescription('')
            onHide()
        })
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
                    Добавить платную услугу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название">

                    </Form.Control>
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="mt-3"
                        placeholder="Введите цену платной услуги">

                    </Form.Control>
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание">

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPlata}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePlata;