import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DoctorItem from "./DoctorItem";
import AnaliziItem from "./AnaliziItem";
import AnaliziPItem from "./AnaliziPItem";


const AnaliziPList =  observer( () => {
    const {analizi} = useContext(Context)
    console.log()

    return (
        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">


        </Row>
    )

})

export default AnaliziPList