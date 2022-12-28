import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createVrach = async (familia, imya, otchestvo, nomer_telefona,cabinet, email, PositionId, DepartmentId, SheduleId) => {
    const {data} = await $host.post('api/vrach', {familia, imya, otchestvo, nomer_telefona, cabinet, email, PositionId, DepartmentId, SheduleId})
    return data
}

export const fetchDoctors = async () => {
    const {data} = await $host.get('api/vrach')
    return data

}

export const fetchVrach = async (email) => {
    const {data} = await $host.get('api/vrach/' + email)
    return data
}

export const fetchVrachId = async (id) => {
    const {data} = await $host.get('api/vrach/id/' + id)
    return data
}

export const changeVrachDol = async (id, PositionId) => {
    const {data} = await $host.put('api/vrach/dol/', {id, PositionId})
    return data
}

export const changeVrachRas = async (id, SheduleId) => {
    const {data} = await $host.put('api/vrach/ras/', {id, SheduleId})
    return data
}