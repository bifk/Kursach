import React, {useContext, useState} from 'react';
import {Button, Form, Image, Modal} from "react-bootstrap";
import {createUlica} from "../../http/ulicaAPI";
import {createZapic} from "../../http/zapicAPI";
import {Context} from "../../index";

const ShowImage = ({show, onHide}) => {
    const {diagnoz} = useContext(Context)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>

                <Image style={{minWidth: 500, minHeight: 500, maxHeight: 700, maxWidth: 750}} src={'http://localhost:5000/' + diagnoz.img} />

            </Modal.Body>

        </Modal>
    );
};

export default ShowImage;