import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createRaspisanie = async ({den, time}) => {
    const {data} = await $authHost.post('api/raspisanie', {den, time})
    return data
}

export const fetchRaspisanies = async ({Limit}) => {
    const {data} = await $host.get('api/raspisanie', {params:{Limit}})
    return data

}

export const fetchOneRaspisanie = async (den, time) => {
    const {data} = await $host.get('api/raspisanie/' + den + '/' + time)

    return data
}

export const fetchOneRaspisanieId = async (id) => {
    const {data} = await $host.get('api/raspisanie/' + id)
    return data
}
