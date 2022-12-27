import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";


const OtdelenieList = observer(() => {
    const {otdelenie} = useContext(Context)

    return (
        <Row style={{ overflowY:'auto', height: 700}} className="d-flex">

            {otdelenie.otdelenies.map(otdelenie =>
            <OtdelenieItem  key={otdelenie.id} otdelenie={otdelenie}/>
            )}

        </Row>
    )

})

export default OtdelenieList