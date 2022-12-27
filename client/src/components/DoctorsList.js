import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DoctorItem from "./DoctorItem";


const DoctorsList =  observer( () => {
    const {vrach} = useContext(Context)

    return (
        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
            {vrach.doctors.map(vrach =>
                    <DoctorItem key={vrach.id} vrach={vrach}/>

            )}

        </Row>
    )

})

export default DoctorsList