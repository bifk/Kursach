import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createZapic = async (date, time, cabinet, PacientId, DoctorId) => {
    try {
        const {data} = await $host.post('api/zapic', {date, time, cabinet, PacientId, DoctorId})
        return data
    } catch (e){
        alert(e.response.data.message)
        return
    }

}

export const fetchZapisiPac = async (PacientId) => {
    const {data} = await $host.get('api/zapic/pac/' + PacientId)
    return data

}


export const fetchZapisiVrach = async (DoctorId) => {
    const {data} = await $host.get('api/zapic/vrach/' + DoctorId)
    return data

}

export const cancelZapis = async (id) => {
    const {message} = await $authHost.delete('api/zapic/' + id)
    return message
}