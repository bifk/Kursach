import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createUlica} from "../../http/ulicaAPI";

const CreateUlica = ({show, onHide}) => {

    const [nazvanie, setNazvanie] = useState('')



    const addUlica = () => {
        createUlica({nazvanie}).then(data => {
            alert('Улица успешно добавлена')
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
                        placeholder="Введите название улицы">

                    </Form.Control>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addUlica}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateUlica;