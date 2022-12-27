import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import OtdelenieItem from "./OtdelenieItem";
import DolznostItem from "./DolznostItem";
import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";
import {Multiselect} from "multiselect-react-dropdown";
import Select from "react-select"



const PreparatList = observer(() => {
    const {preparat} = useContext(Context)
    let datas = []
    for (let i = 0; i < preparat.preparats.length; i++){
        datas[i] = preparat.preparats[i].name
    }
    console.log(datas)
    let preps = []
    const [options] = useState(datas)
    return (
    <Form>

    <Multiselect
        isObject={false}
        options={datas}
        onSelect={e => {preps = e; preparat.setPreps(preps); console.log(preparat.preps1)}}
        placeholder=""
    ></Multiselect>
    </Form>
    )

})

export default PreparatList