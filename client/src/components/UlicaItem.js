import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";
import {fetchGorods} from "../http/gorodAPI";
import {fetchUlicas} from "../http/ulicaAPI";


const UlicaItem = observer(() => {
    const {ulica} = useContext(Context)
    let Limit = 1
    const {pacient} = useContext(Context)
    const [name,setName] = useState('')
    fetchUlicas({Limit}).then(data => {ulica.setNazvanie(data[0].nazvanie)})

    return (

        <Form.Control className="mt-3" as="select" onChange={value => {ulica.setNazvanie(value.target.value)}} >
            {ulica.ulicas.map(ulica => (
                <option value={ulica.nazvanie.toString()}>{ulica.nazvanie.toString()}</option>
            ))}
        </Form.Control>

    )

})

export default UlicaItem