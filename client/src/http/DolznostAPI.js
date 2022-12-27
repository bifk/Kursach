import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createDolzntost = async ({salary, name}) => {
    const {data} = await $authHost.post('api/dolznost', {salary, name})
    return data
}

export const fetchDolznost = async ({Limit}) => {
    const {data} = await $host.get('api/dolznost',{params:{Limit}})
    return data

}

export const fetchOneDolznost = async (name) => {
    const {data} = await $host.get('api/dolznost/' + name)
    return data
}

export const fetchOneDolznostId = async (id) => {
    const {data} = await $host.get('api/dolznost/id/' + id)
    return data
}
