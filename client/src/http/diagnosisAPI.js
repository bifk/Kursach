import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createDiagnosis = async (diagnosis) => {
    const {data} = await $authHost.post('api/diagnoz', diagnosis)
    return data
}

export const fetchOneDiagnozId = async (id) => {
    const {data} = await $host.get('api/diagnoz/id/' + id)
    return data
}

export const fetchAdressId = async (id) => {
    const {data} = await $host.get('api/diagnoz/id/' + id)
    return data
}
