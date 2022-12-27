import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createPreparat} from "../../http/preparatAPI";

const CreatePreparat = ({show, onHide}) => {
    const [isRecipe, setIsRecipe] = useState(false)
    const [name, setName] = useState('')

    const addPreparat = async () => {
        createPreparat(isRecipe, name).then(data => {
            alert('Вы успешно добавили препарат')
            setName('')
            setIsRecipe(false)
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
                    Добавить препарат
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите название препарата"
                    ></Form.Control>

                            <Form.Check
                                type={'checkbox'}
                                className="mt-3"
                                onChange={e => setIsRecipe(e.target.checked)}
                                label={"По рецепту"}
                            />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPreparat}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePreparat;