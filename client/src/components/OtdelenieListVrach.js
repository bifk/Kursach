import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DolznostItem from "./DolznostItem";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";


const OtdelenieListVrach = observer(() => {
    const {otdelenie} = useContext(Context)
    const [name,setName] = useState('')
    return (

        <Form.Control className="mt-3" as="select" onChange={value => {otdelenie.setName(value.target.value)}} >
            {otdelenie.otdelenies.map(otdelenie => (
                <option value={otdelenie.name.toString()}>{otdelenie.name.toString()}</option>
            ))}
        </Form.Control>

    )

})

export default OtdelenieListVrach