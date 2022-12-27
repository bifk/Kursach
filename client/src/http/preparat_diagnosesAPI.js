import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createPreparat_diagnoses = async (PreparatId, DiagnosisId) => {
    try {
        const {data} = await $authHost.post('api/preparat_diagnoses', {PreparatId, DiagnosisId})
        return data
    } catch (e){
        alert(e.response.data.message)
    }
}

export const fetchPreparat_diagnoses = async () => {
    const {data} = await $host.get('api/preparat_diagnoses')
    return data

}

export const fetchOnePreparat_diagnoses = async (DiagnosisId) => {
    const {data} = await $host.get('api/preparat_diagnoses/' + DiagnosisId)
    return data
}

export const fetchOnePreparat_diagnosesId = async (PacientId) => {
    const {data} = await $host.get('api/preparat_diagnoses/' + PacientId)
    return data
}
