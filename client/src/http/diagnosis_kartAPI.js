import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createDiagnosis_kart = async (date, MedKartId, DiagnosisId) => {
    try {
        const {data} = await $authHost.post('api/diagnosis_kart', {date, MedKartId, DiagnosisId})
        return data
    } catch (e){
        alert(e.response.data.message)
    }
}

export const fetchDiagnosis_kart = async () => {
    const {data} = await $host.get('api/diagnosis_kart')
    return data

}

export const fetchAllDiagnosis_kartMed = async (MedKartId) => {
    const {data} = await $host.get('api/diagnosis_kart/' + MedKartId)
    return data
}

export const fetchOneDiagnosis_kartId = async (PacientId) => {
    const {data} = await $host.get('api/diagnosis_kart/' + PacientId)
    return data
}
