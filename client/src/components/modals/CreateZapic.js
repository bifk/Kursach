import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createUlica} from "../../http/ulicaAPI";
import {createZapic} from "../../http/zapicAPI";
import {Context} from "../../index";

const CreateZapic = ({show, onHide}) => {
    const {vrach} = useContext(Context)
    const {pacient} = useContext(Context)

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')



    const addZapic = async () => {
        createZapic(date, time, vrach.cabinet, pacient.id, vrach.id).then(data => {
            if (data !== undefined) {
                alert('Вы успешно записались к врачу')
                setDate('')
                setTime('')
                onHide()
            }
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
                        value={date}
                        type={"date"}
                        onChange={e => setDate(e.target.value)}
                        className="mt-3"
                        placeholder="Введите дату записи">

                    </Form.Control>
                    <Form.Control
                        type={"time"}
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className="mt-3"
                        placeholder="Введите время записи">

                    </Form.Control>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addZapic}>Добавить  </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateZapic;