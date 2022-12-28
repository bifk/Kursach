import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createAnalizi_zapic = async (AnalyAsisId, ZapicId) => {
    try {
        const {data} = await $authHost.post('api/analizi_zapic', {AnalyAsisId, ZapicId})
        return data
    } catch (e){
        console.log(e)
    }
}

export const fetchAnalizi_zapic = async (ZapicId) => {
    const {data} = await $host.get('api/analizi_zapic/' + ZapicId)
    return data

}

export const fetchOneAnalizi_kart_zapic = async (name) => {
    const {data} = await $host.get('api/analizi_zapic/' + name)
    return data
}

export const fetchOneAnalizi_kart_zapicId = async (PacientId) => {
    const {data} = await $host.get('api/analizi_zapic/' + PacientId)
    return data
}
