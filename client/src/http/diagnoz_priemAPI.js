import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createDiagnosis_priem = async (DiagnosisId, PriemId) => {
    try {
        const {data} = await $authHost.post('api/diagnoz_priem', {DiagnosisId, PriemId})
        return data
    } catch (e){
        alert(e.response.data.message)
    }
}

export const fetchDiagnosis_priem = async () => {
    const {data} = await $host.get('api/diagnoz_priem')
    return data

}

export const fetchAllDiagnosis_priemDiag = async (DiagnosisId) => {
    const {data} = await $host.get('api/diagnoz_priem/' + DiagnosisId)
    return data
}

export const fetchOneDiagnosis_priemId = async (PacientId) => {
    const {data} = await $host.get('api/diagnoz_priem/' + PacientId)
    return data
}
