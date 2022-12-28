import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchAllDiagnosis_kartMed} from "../http/diagnosis_kartAPI";
import {fetchOneKartPacId} from "../http/medKartAPI";
import OtdelenieItem from "../components/OtdelenieItem";
import MedKartList from "../components/MedKartList";
import medKartItem from "../components/MedKartList";
import {fetchOneDiagnozId} from "../http/diagnosisAPI";
import MedKartItem from "../components/MedKartItem";

const MedKart = observer(() => {
    const {pacient} = useContext(Context)
    const {user} = useContext(Context)
    const {diagnoz} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const [split1, setSplit1] = useState('')
    const [split2, setSplit2] = useState('')
    const [split3, setSplit3] = useState('')
    let dateSplit
    useEffect(() => {
        fetchOneKartPacId(pacient.id).then(kart => {
            fetchAllDiagnosis_kartMed(kart.id).then(diagnozis => {
                for (let i = 0; i < diagnozis.length; i++){
                    fetchOneDiagnozId(diagnozis[i].DiagnosisId).then(data => {
                        data.date = diagnozis[i].date
                        diagnoz.setDiag(data, i)
                    })
                }

            })

           setIsLoading(true)
        }).catch(e => {
            console.log(e)

        })

        dateSplit = pacient.medkartid.toString().split('-')
        setSplit1(dateSplit[2])
        setSplit2(dateSplit[1])
        setSplit3(dateSplit[0])

    }, [])

    if (isLoading)
        return (
            <Container className="d-flex ms-auto align-items-center"
                       style={{height: window.innerHeight - 54}}
            ><Card style ={{width: window.innerWidth - 200, height: window.innerHeight - 300}} className="p-5 me-1">
                <h2 style={{display: 'inline'}} className="m-auto">Медицинская карточка</h2>

                <h2 style={{display: 'inline'}} className="m-auto">{user.isAuth ? pacient.familiaa : ''} {user.isAuth ? pacient.imya : ''} {user.isAuth ? pacient.otchestvo : ''}</h2>
                <h3 style={{display: 'inline'}} className="mb-2 m-auto">Дата выдачи: {split1 + '.' + split2 + '.' + split3}</h3>
                <Form className="d-flex flex-column">
                    <Card style ={{maxHeight: window.innerHeight - 100, overflowY:'auto',width: "auto", height: window.innerHeight - 500}} className="p-5 me-1">
                        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
                            {isLoading && diagnoz.diag.map(diagnoz => (
                                <MedKartItem diagnoz1={diagnoz}/>
                            ))}

                        </Row>

                    </Card>


                </Form>
            </Card>


            </Container>
        );
    else
        return (
            <p>loading...</p>
        )
});

export default MedKart;