import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createGorod} from "../../http/gorodAPI";

const CreateGorod = ({show, onHide}) => {

    const [nazvanie, setNazvanie] = useState('')



    const addGorod = () => {
        createGorod({nazvanie}).then(data => {
            alert('Город успешно добавлен')
            setNazvanie('')
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
                        value={nazvanie}
                        onChange={e => setNazvanie(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название города">

                    </Form.Control>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addGorod}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGorod;