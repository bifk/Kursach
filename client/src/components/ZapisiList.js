import {fetchZapisiPac} from "../http/zapicAPI";
import {fetchVrachId} from "../http/vrachAPI";

import {observer} from "mobx-react-lite";
import React, {useContext, useEffect} from "react";
import {Context} from "../index";
import {Button, Card, Container, Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DoctorItem from "./DoctorItem";
import ZapicItem from "./ZapicItem";
import ZapisiItem from "./ZapisiItem";
import {fetchOneDolznostId} from "../http/DolznostAPI";
import {fetchOneOtdelenieId} from "../http/OtdelenieAPI";
import {fetchOneRaspisanieId} from "../http/raspisanieAPI";
import CreateZapic from "./modals/CreateZapic";


const ZapisiList =  observer( () => {
    const {pacient} = useContext(Context)
    const {user} = useContext(Context)
    const {zapic} = useContext(Context)

    useEffect(() => {
    if (user.therole === 'pacient')
        fetchZapisiPac(pacient.id).then(data =>{
                zapic.setZapisi(data)
        })

    }, [])
    return (
        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
            {zapic.zapisi.map(zapic =>
            <ZapisiItem key={zapic.id}  zapic1={zapic}/>

            ) }
        </Row>
    )

})

export default ZapisiList