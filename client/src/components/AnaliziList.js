import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DoctorItem from "./DoctorItem";
import AnaliziItem from "./AnaliziItem";


const AnaliziList =  observer( ({analizi1}) => {
    const {analizi} = useContext(Context)

    console.log(analizi.analizis)
    return (
        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
            {analizi1.map(analizi =>
                <AnaliziItem key={analizi.id} analizi1={analizi}/>

            )}

        </Row>
    )

})

export default AnaliziList