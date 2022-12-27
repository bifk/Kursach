import React, {useContext, useDeferredValue, useEffect, useState} from 'react';
import {Card, Col, Container, Image} from "react-bootstrap";
import {$authHost, $host} from "../http/index";
import {useHistory} from "react-router-dom"
import {fetchOneDiagnozId} from "../http/diagnosisAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchOnePreparat_diagnoses} from "../http/preparat_diagnosesAPI";
import {fetchOnePreparat, fetchOnePreparatId} from "../http/preparatAPI";
import ShowImage from "../components/modals/ShowImage";


const MedKartTest = observer(({dateSplit, name, preps, img }) => {
    const {diagnoz} = useContext(Context)
    const [imageVisible, setImageVisible] = useState(false)
    const {preparat} = useContext(Context)

    console.log(preparat.preps1)

            return (

                <Container className="mt-1">

                    <div className="mt-1 d-flex justify-content-between align-items-center">


                        <div className="align-items-center">
                            Дата приема: {dateSplit[2] + '.' + dateSplit[1] + '.' + dateSplit[0] + ' '}&emsp;&emsp;&emsp;
                            Диагноз: {name + ' '}&emsp;&emsp;&emsp;
                            Назначенный препарат: {preps + ''}<br/>
                            {img !== null ? 'Прикрепленный файл: ' : ''}
                            {img !== null ? <Image width={150} style={{cursor: 'pointer'}} onClick={() => {setImageVisible(true); diagnoz.setImg(img)}} height={150} src={'http://localhost:5000/' + img} /> : ''}
                        </div>
                    </div>
                    <div></div>
                    <br/>
                    <ShowImage show={imageVisible} onHide={() => setImageVisible(false)}/>
                </Container>
            );

    }
);

export default MedKartTest;