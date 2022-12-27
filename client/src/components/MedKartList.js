import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";

import {useHistory} from "react-router-dom"
import {fetchOneDiagnozId} from "../http/diagnosisAPI";
import {Context} from "../index";
import MedKartItem from "./MedKartItem";
import {observer} from "mobx-react-lite";


const MedKartList = observer(({diagnoz1}) => {
    const {diagnoz} = useContext(Context)
    let diag
    const [isLoaded, setisLoaded] = useState(false)
    /*useEffect(() =>{
        console.log(diagnoz1)
        fetchOneDiagnozId(diagnoz1.DiagnosisId).then(diagnozes => {
            console.log(diagnozes[0])
            diag = {
                name: diagnozes[0].name,
                stepen_boli: diagnozes[0].stepen_boli,
                img: diagnozes[0].img
            }
            diagnoz.setDiag(diag)
            diagnoz.setName(diagnozes[0].name)
            diagnoz.setImg(diagnozes[0].img)
            diagnoz.setStepen_boli(diagnozes[0].stepen_boli)
            setisLoaded(true)
        })
            .catch((e) => {
                console.log(e)
                setisLoaded(false)
            })

    }, [])*/


    if (isLoaded) {
        return (
            <Row style={{overflowY: 'auto', height: "auto"}} className="d-flex">

                <MedKartItem key={diagnoz.id} diagnoz1={diagnoz.diag}/>

            </Row>
        );

    } else {
        return(
            <p>loading...</p>
        )
    }
});

export default MedKartList;