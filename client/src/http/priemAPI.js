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

export const fetchOnePriem = async (name) => {
    const {data} = await $host.get('api/priem/' + name)
    return data
}

export const fetchOnePriemId = async (id) => {
    const {data} = await $host.get('api/priem/id/' + id)
    return data
}
