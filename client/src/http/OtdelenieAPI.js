import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createOtdelenie = async ({corpus, zaved, name}) => {
    const {data} = await $authHost.post('api/otdelenie', {corpus, zaved, name})
    return data
}

export const fetchOtdelenies = async ({Limit}) => {
    const {data} = await $host.get('api/otdelenie',{params: {Limit}})
    return data

}



    export const fetchOneOtdelenie = async (name) => {
        const {data} = await $host.get('api/otdelenie/' + name)
        return data



}

export const fetchOneOtdelenieId = async (id) => {
    const {data} = await $host.get('api/otdelenie/id/' + id)
    return data



}
