import React, {useContext, useDeferredValue, useEffect, useState} from 'react';
import {Card, Col, Container, Image} from "react-bootstrap";
import {$authHost, $host} from "../http/index";
import {useHistory} from "react-router-dom"
import {fetchOneDiagnozId} from "../http/diagnosisAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchOnePreparat_diagnoses} from "../http/preparat_diagnosesAPI";
import {fetchOnePreparat, fetchOnePreparatId} from "../http/preparatAPI";
import CreateUlica from "./modals/CreateUlica";
import ShowImage from "./modals/ShowImage";
import MedKartTest from "../pages/MedKartTest";


const MedKartItem = observer(({diagnoz1}) => {
    const {diagnoz} = useContext(Context)
    const {preparat} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const [preps1, setPreps1] = useState([])
    console.log('')
    useEffect( () => {
        if (diagnoz1 !== undefined) {
            fetchOnePreparat_diagnoses(diagnoz1.id).then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].PreparatId !== undefined)
                        fetchOnePreparatId(data[i].PreparatId).then(data1 => {
                            setPreps1(oldArray => [...oldArray, data1.name])
                        })

                }

                setIsLoading(true)

            })
        }
    }, [])




        if (diagnoz1 !== undefined){
            let dateSplit = diagnoz1.date.split('-')
        if (isLoading)
            return (

               <MedKartTest dateSplit={dateSplit} name={diagnoz1.name} preps={preps1} img={diagnoz1.img}/>
            );
        else
            return (
                <p>loading...</p>
            )
}}
);

export default MedKartItem;