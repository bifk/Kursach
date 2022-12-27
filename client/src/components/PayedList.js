import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PlataItem from "./plataItem";
import {fetchOnePlata_pacientId} from "../http/plata_pacientAPI";
import {fetchOnePlata, fetchOnePlataId} from "../http/plataAPI";
import PayedItem from "./PayedItem";



const PayedList = observer(() => {
    const {plata} = useContext(Context)
    const {pacient} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
    fetchOnePlata_pacientId(pacient.id).then(data => {
        for (let i = 0; i < data.length; i++) {
            fetchOnePlataId(data[i].PayFunctionId).then(data => {
                plata.setPayed(data, i)

                setIsLoading(true)
                console.log(data + ' ' + isLoading)
            })
        }
    })
    }, [])

    useEffect(() =>{
        setIsLoading(false)
    }, [])
    if (isLoading)
        return (

            <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
                {plata.payed.map(payed =>
                    <PayedItem  plata={payed}/>
                )}

            </Row>

        )
    else
        return (
            <p>loading...</p>
        )

})

export default PayedList