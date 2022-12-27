import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createGorod} from "../../http/gorodAPI";
import {createPriem} from "../../http/priemAPI";
import {Context} from "../../index";
import {createDiagnosis} from "../../http/diagnosisAPI";
import {fetchOneKartPacId} from "../../http/medKartAPI";
import {createDiagnosis_kart} from "../../http/diagnosis_kartAPI";
import {cancelZapis} from "../../http/zapicAPI";
import PreparatList from "../preparatList";
import {fetchOnePreparat} from "../../http/preparatAPI";
import {createPreparat_diagnoses} from "../../http/preparat_diagnosesAPI";
import {login} from "../../http/userAPI";
import {createDiagnosis_priem} from "../../http/diagnoz_priemAPI";

const CreateGorod = ({show, onHide}) => {
    const {zapic} = useContext(Context)
    const {preparat} = useContext(Context)
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [stepen_boli, setStepen_boli] = useState(0)


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const createOtchet = async () => {
        try {
            console.log(preparat.name)
            const formData = new FormData()
            formData.append('stepen_boli', stepen_boli)
            formData.append('name', name)
            formData.append('img', file)
            let diagnosis = await createDiagnosis(formData)
            let priem = await createPriem(zapic.date, zapic.pacientid, zapic.doctorid)
            await createDiagnosis_priem(diagnosis.id, priem.id)
            for (let i = 0; i < preparat.preps1.length; i++) {
                let preparatd = await fetchOnePreparat(preparat.preps1[i])
                await createPreparat_diagnoses(preparatd.id, diagnosis.id)

            }



            let kart = await fetchOneKartPacId(zapic.pacientid)
            await createDiagnosis_kart(zapic.date, kart.id, diagnosis.id)
            alert('Вы успешно добавили отчет')
            await cancelZapis(zapic.id)
            setFile(null)
            setStepen_boli(0)
            setName('')
            onHide()
        }
        catch (e){
            console.log(e)
        }
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
                    Создать отчет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label
                        className="ms-1 "
                    >Введите диагноз</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                    className="mb-3">
                    </Form.Control>
                    <Form.Label
                        className="ms-1"
                    >Назначьте препарат</Form.Label>
                    <PreparatList/>
                    <Form.Label
                        className="ms-1 mt-3"
                    >Введите степень боли пациента (1-10)</Form.Label>
                    <Form.Control
                        value={stepen_boli}
                        onChange={e => setStepen_boli(e.target.value)}>

                    </Form.Control>
                    <Form.Label
                        className="ms-1 mt-3"
                    >Загрузите файл (при наличии) </Form.Label>
                    <Form.Control
                        type="file"
                        onChange={selectFile}>

                    </Form.Control>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={createOtchet}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGorod;