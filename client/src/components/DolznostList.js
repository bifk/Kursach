import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DolznostItem from "./DolznostItem";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";


const DolznostList = observer(() => {
    const {dolznost} = useContext(Context)

    return (

    <Form.Control className="mt-3" as="select" onChange={value => {dolznost.setName(value.target.value); console.log(dolznost.nameD)}} >
        {dolznost.dolznosts.map(dolznost => (
            <option value={dolznost.name.toString()}>{dolznost.name.toString()}</option>
        ))}
    </Form.Control>

    )

})

export default DolznostList