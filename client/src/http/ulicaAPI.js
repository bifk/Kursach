import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createUlica = async (nazvanie) => {
    const {data} = await $authHost.post('api/ulica', {nazvanie})
    return data
}

export const fetchUlicas = async ({Limit}) => {
    const {data} = await $host.get('api/ulica', {params: {Limit}})
    return data

}

export const fetchOneUlicaId = async (id) => {
    const {data} = await $host.get('api/ulica/id/' + id)
    return data

}

export const fetchOneUlicaN = async (nazvanie) => {
    const {data} = await $host.get('api/ulica/' + nazvanie)
    return data

}

