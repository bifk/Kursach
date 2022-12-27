import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createPreparat = async (isRecipe, name) => {
    const {data} = await $authHost.post('api/preparat', {isRecipe, name})
    return data
}

export const fetchPreparat = async ({Limit}) => {
    const {data} = await $host.get('api/preparat', {params: {Limit}})
    return data

}

export const fetchOnePreparat = async (name) => {
    const {data} = await $host.get('api/preparat/' + name)
    return data
}

export const fetchOnePreparatId = async (id) => {
    const {data} = await $host.get('api/preparat/id/' + id)
    return data
}
