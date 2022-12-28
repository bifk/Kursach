import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DoctorItem from "./DoctorItem";
import PriemItem from "./PriemItem";


const PriemList =  observer( () => {
    const {priem} = useContext(Context)

    return (
        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">
            {priem.priems.map(priem =>
                <PriemItem key={priem.id} priem={priem}/>

            )}

        </Row>
    )

})

export default PriemList