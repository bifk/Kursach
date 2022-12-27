import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createPlata = async ({description, price, name}) => {
    const {data} = await $authHost.post('api/plata', {description, price, name})
    return data
}

export const fetchPlata = async () => {
    const {data} = await $host.get('api/plata')
    return data

}

export const fetchOnePlata = async (name) => {
    const {data} = await $host.get('api/plata/' + name)
    return data
}

export const fetchOnePlataId = async (id) => {
    const {data} = await $host.get('api/plata/id/' + id)
    return data
}
