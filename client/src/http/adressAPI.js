import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createAdress = async (dom, kvartira, CityId, StreetId) => {
    const {data} = await $authHost.post('api/adress', {dom, kvartira, CityId, StreetId})
    return data
}

export const checkAdress = async (dom, kvartira, CityId, StreetId) => {
    const {data} = await $host.get('api/adress/' +dom+ '/' + kvartira + '/' + CityId + '/' + StreetId)
    return data
}

export const fetchAdressId = async (id) => {
    const {data} = await $host.get('api/adress/id/' + id)
    return data
}
