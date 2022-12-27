import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createPacient = async (familia, imya, otchestvo, nomer_polisa, dob, nomer_telefona, email, AdressId) => {
    const {data} = await $host.post('api/pacient', {familia, imya, otchestvo, nomer_polisa, dob, nomer_telefona, email, AdressId})
    return data
}

export const fetchPacient = async (email) => {
    const {data} = await $host.get('api/pacient/' + email)
    return data
}

export const fetchPacientId = async (id) => {
    const {data} = await $host.get('api/pacient/id/' + id)
    return data
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    return data
}