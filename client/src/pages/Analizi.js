import React, {useContext, useEffect, useState} from 'react';
import {Card, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchOtdelenies} from "../http/OtdelenieAPI";
import OtdelenieList from "../components/OtdelenieList";
import {useParams} from "react-router-dom";
import DoctorsList from "../components/DoctorsList";
import AnaliziPList from "../components/AnaliziPList";
import {fetchOnePriemPac} from "../http/priemAPI";
import {fetchAnalizi_priemPr} from "../http/analizi_priemAPI";
import AnaliziPItem from "../components/AnaliziPItem";
import {fetchAnalizi, fetchAnaliziAll} from "../http/analiziAPI";

const Analizi = observer(() => {
    const {pacient} = useContext(Context)
    const {analizi} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const [analizs, setAnalizs] = useState([])
    useEffect(() => {
        fetchOnePriemPac(pacient.id).then(data => {
            for (let i = 0; i < data.length; i++){

                fetchAnalizi_priemPr(data[i].id).then(data1 => {
                        fetchAnaliziAll(data1[0].AnalyAsisId).then(data2 => {
                            setAnalizs(oldArray => [...oldArray, data2[0]])
                        })


                })
            }
        })

        analizi.setAnaliziP(analizs)
        console.log(analizi.analiziP)
        setIsLoading(true)
    }, [])

    if(isLoading)
        return (
            <Container className="d-flex ms-auto align-items-center"
                       style={{height: window.innerHeight - 54}}

            ><Card style ={{width: window.innerWidth - 100, height: window.innerHeight - 100}} className="p-5 me-1">
                <h2 style={{display: 'inline'}} className="m-auto mt-1  mb-2">Анализы</h2>
                <Form style={{ height: window.innerHeight - 200, fontSize: 40, overflowY: 'auto'}} className="d-flex flex-column mt-1">
                    {analizs.map(analizi =>
                        <AnaliziPItem  analizi1={analizi}/>

                    )}
                </Form>

            </Card>


            </Container>
        );
    else
        return(
            <p>loading...</p>
        )
});

export default Analizi;