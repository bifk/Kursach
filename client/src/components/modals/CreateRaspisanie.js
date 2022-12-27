import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createRaspisanie} from "../../http/raspisanieAPI";

const CreateRaspisanie = ({show, onHide}) => {

    const [den, setDen] = useState('')
    const [time, setTime] = useState('')

    const addRaspisanie = () => {
        createRaspisanie({den, time}).then(data => {
            alert('Расписание успешно добавлено')
            setDen('')
            setTime('')
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
                    Добавить расписание
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={den}
                        onChange={e => setDen(e.target.value)}
                        className="mt-3"
                        placeholder="Введите дни недели, пример: Пн-Пт">

                    </Form.Control>
                    <Form.Control
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className="mt-3"
                        placeholder="Введите время работы, пример: 09:00 - 18:00">

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addRaspisanie}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRaspisanie;