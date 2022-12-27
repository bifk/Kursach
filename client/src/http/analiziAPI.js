import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createAnalizi = async (type) => {
    const {data} = await $authHost.post('api/analizi', {type})
    return data
}

export const update = async (MedKartId, results) => {
    const {data} = await $host.put('api/analizi/', {MedKartId, results})
    return data
}

export const fetchAnalizi = async (id) => {
    const {data} = await $host.get('api/analizi/id/' + id)
    return data
}
