import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createAdress} from "../../http/adressAPI";
import {createUlica} from "../../http/ulicaAPI";
import {Context} from "../../index";
import GorodItem from "../GorodItem";
import UlicaItem from "../UlicaItem";
import DolznostList from "../DolznostList";
import {fetchOneDolznost} from "../../http/DolznostAPI";
import {changeVrachDol} from "../../http/vrachAPI";

const CreateAdress = ({show, onHide}) => {
    const {vrach} = useContext(Context)
    const {dolznost} = useContext(Context)
    const [dom, setDom] = useState('')
    const [dol, setDol] = useState('')




    const change = () => {
        fetchOneDolznost(dolznost.nameD.toString()).then(data => {
            changeVrachDol(vrach.id, data.id).then(data =>{
                console.log(data)
                alert('Вы успешно изменили должность врача')
                onHide()
            }
            )
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
                    Изменить должность
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Выберите новую должность</Form.Label>
                   <DolznostList/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={change}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAdress;