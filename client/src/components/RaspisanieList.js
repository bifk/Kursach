import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DolznostItem from "./DolznostItem";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";


const RaspisanieList = observer(() => {
    const {raspisanie} = useContext(Context)
    const [name,setName] = useState('')


    console.log(raspisanie.id)

    return (

        <Form.Control className="mt-3" as="select" onChange={value => {raspisanie.setDen(value.target.value.split(' ')[0]);
            raspisanie.setTime(value.target.value.split(' ')[1])}} >

            {raspisanie.raspisanies.map(raspisanie => (
                <option value={raspisanie.den.toString() + ' ' + raspisanie.time.toString()}>{raspisanie.den.toString() + ' ' + raspisanie.time.toString()}</option>
            ) )}





        </Form.Control>

    )

})

export default RaspisanieList