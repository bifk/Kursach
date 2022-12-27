import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";
import {fetchOtdelenies} from "../http/OtdelenieAPI";
import {fetchGorods} from "../http/gorodAPI";


const GorodItem = observer(() => {
    const {gorod} = useContext(Context)
    let Limit = 1
    const {pacient} = useContext(Context)
    const [name,setName] = useState('')
    fetchGorods({Limit}).then(data => {gorod.setNazvanie(data[0].nazvanie)})
    return (

        <Form.Control className="mt-3" as="select" onChange={value => {gorod.setNazvanie(value.target.value)}} >
            {gorod.gorods.map(gorod => (
                <option value={gorod.nazvanie.toString()}>{gorod.nazvanie.toString()}</option>
            ))}
        </Form.Control>

    )

})

export default GorodItem