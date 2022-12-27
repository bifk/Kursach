import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createAnalizi_kart_zapic = async (MedKartId, AnalyAsisId, ZapicId) => {
    try {
        const {data} = await $authHost.post('api/analizi_kart_zapic', {MedKartId, AnalyAsisId, ZapicId})
        return data
    } catch (e){
        console.log(e)
    }
}

export const fetchAnalizi_kart_zapic = async () => {
    const {data} = await $host.get('api/analizi_kart_zapic')
    return data

}

export const fetchOneAnalizi_kart_zapic = async (name) => {
    const {data} = await $host.get('api/analizi_kart_zapic/' + name)
    return data
}

export const fetchOneAnalizi_kart_zapicId = async (PacientId) => {
    const {data} = await $host.get('api/analizi_kart_zapic/' + PacientId)
    return data
}
