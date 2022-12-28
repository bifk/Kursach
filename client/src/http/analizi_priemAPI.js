import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createAnalizi_priem = async (AnalyAsisId, PriemId) => {
    const {data} = await $authHost.post('api/analizi_priem', {AnalyAsisId, PriemId})
    return data
}


export const fetchAnalizi_priemPr  = async (PriemId) => {
    try
    {
    const {data} = await $host.get('api/analizi_priem/' + PriemId)
    return data
    }
    catch (e){
        console.log(e)
    }
}
