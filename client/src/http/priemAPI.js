import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createPriem = async (date, PacientId, DoctorId) => {
    const {data} = await $authHost.post('api/priem', {date, PacientId, DoctorId})
    return data
}

export const fetchPriem = async () => {
    const {data} = await $host.get('api/priem')
    return data

}

export const fetchOnePriemPac = async (PacientId) => {
    const {data} = await $host.get('api/priem/pac/' + PacientId)
    return data
}

export const fetchOnePriemId = async (DoctorId) => {
    const {data} = await $host.get('api/priem/' + DoctorId)
    return data
}
