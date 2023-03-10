import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createGorod} from "../../http/gorodAPI";
import {createAnalizi} from "../../http/analiziAPI";
import {fetchOneKartPacId} from "../../http/medKartAPI";
import {Context} from "../../index";
import {createAnalizi_zapic} from "../../http/analizi_zapicAPI";

const CreateAnalizi = ({show, onHide}) => {
    const {zapic} = useContext(Context)
    const [type, setType] = useState('')



    const addAnalizi = async () => {
        let analizi = await createAnalizi(type)
        await createAnalizi_zapic( analizi.id, zapic.id)
        alert('Вы успешно сдали анализы')
        setType('')
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
                    Сдать анализы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={type}
                        onChange={e => setType(e.target.value)}
                        className="mt-3"
                        placeholder="Введите тип анализов">

                    </Form.Control>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAnalizi}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAnalizi;