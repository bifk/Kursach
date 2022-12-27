import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createPlata_pacient = async (PacientId, PayFunctionId) => {
    try {
        const {data} = await $authHost.post('api/plata_pacient', {PacientId, PayFunctionId})
        return data
    } catch (e){
        alert(e.response.data.message)
    }
}

export const fetchPlata_pacient = async () => {
    const {data} = await $host.get('api/plata_pacient')
    return data

}

export const fetchOnePlata_pacient = async (name) => {
    const {data} = await $host.get('api/plata_pacient/' + name)
    return data
}

export const fetchOnePlata_pacientId = async (PacientId) => {
    const {data} = await $host.get('api/plata_pacient/' + PacientId)
    return data
}
