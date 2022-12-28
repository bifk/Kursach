import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createAnalizi = async (type) => {
    const {data} = await $authHost.post('api/analizi', {type})
    return data
}

export const updateAnalizi = async (id, results) => {
    const {data} = await $host.put('api/analizi/', {id, results})
    return data
}

export const fetchAnalizi = async (id) => {
    const {data} = await $host.get('api/analizi/id/' + id)
    return data
}

export const fetchAnaliziAll = async (id) => {
    const {data} = await $host.get('api/analizi/all/' + id)
    return data
}
