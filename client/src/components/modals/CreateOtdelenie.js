import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createOtdelenie} from "../../http/OtdelenieAPI";

const CreateOtdelenie = ({show, onHide}) => {

    const [name, setName] = useState('')
    const [corpus, setCorpus] = useState('')
    const [zaved, setZaved] = useState('')


    const addOtdelenie = () => {
        createOtdelenie({name, corpus, zaved}).then(data => {
            alert('Отделение успешно добавлено')
            setName('')
            setZaved('')
            setCorpus('')
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
                    Добавить отделение
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                                    value={name}
                                  onChange={e => setName(e.target.value)}
                                  className="mt-3"
                                  placeholder="Введите название отделения">

                    </Form.Control>
                    <Form.Control
                        value={corpus}
                        onChange={e => setCorpus(e.target.value)}
                        className="mt-3"
                        placeholder="Введите корпус отделения">

                    </Form.Control>
                    <Form.Control
                        value={zaved}
                        onChange={e => setZaved(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заведующего отделения">

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addOtdelenie}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateOtdelenie;