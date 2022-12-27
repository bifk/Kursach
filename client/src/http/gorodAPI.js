import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createGorod = async ({nazvanie}) => {
    const {data} = await $authHost.post('api/gorod', {nazvanie})
    return data
}

export const fetchGorods = async ({Limit}) => {
    const {data} = await $host.get('api/gorod', {params: {Limit}})
    return data

}

export const fetchOneGorodId = async (id) => {
    const {data} = await $host.get('api/gorod/id/' + id)
    return data
}

export const fetchOneGorodN = async (nazvanie) => {
    const {data} = await $host.get('api/gorod/' + nazvanie)
    return data
}
