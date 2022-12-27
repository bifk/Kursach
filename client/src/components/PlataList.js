import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PlataItem from "./plataItem";


const PlataList = observer(() => {
    const {plata} = useContext(Context)

    return (

        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
            {plata.platas.map(plata =>
                <PlataItem  key={plata.id} plata={plata}/>
            )}

        </Row>

    )

})

export default PlataList