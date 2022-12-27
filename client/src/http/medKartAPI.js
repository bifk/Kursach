import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createKart = async (date, PacientId) => {
    const {data} = await $authHost.post('api/kart', {date, PacientId})
    return data
}

export const fetchKarts = async () => {
    const {data} = await $host.get('api/kart')
    return data

}

export const fetchOneKartId = async (id) => {
    const {data} = await $host.get('api/kart/' + id)
    return data
}
export const fetchOneKartPacId = async (PacientId) => {
    const {data} = await $host.get('api/kart/pac/' + PacientId)
    return data
}

