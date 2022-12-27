import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createOtdelenie} from "../../http/OtdelenieAPI";
import {createDolzntost} from "../../http/DolznostAPI";





const CreateDolznost = ({show, onHide}) => {

    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')

    const addDolznost = () => {
        createDolzntost({name, salary}).then(data => {
            alert('Должность успешно добавлено')
            setName('')

            setSalary('')
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
                    Добавить должность
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название должности">

                    </Form.Control>
                    <Form.Control
                        value={salary}
                        onChange={e => setSalary(e.target.value)}
                        className="mt-3"
                        placeholder="Введите зарплату должности">

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDolznost}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDolznost;