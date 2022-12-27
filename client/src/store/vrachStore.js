import {makeAutoObservable} from "mobx";

export default class VrachStore {
    constructor() {
        this._id = {}
        this._familia = {}
        this._imya = {}
        this._otchestvo = {}
        this._nomer_telefona = {}
        this._dolznost = {}
        this._doctors = []
        this._otdelenie = {}
        this._raspisanie = {}
        this._email = {}
        this._cabinet ={}
        makeAutoObservable(this)
    }


    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }

    setCabinet(cabinet){
        this._cabinet = cabinet
    }

    get cabinet(){
        return this._cabinet
    }


    setEmail(email){
        this._email = email
    }

    get email(){
        return this._email
    }

    setFamilia(familia){
        this._familia = familia
    }

    setDolznostV(dolznost){
        this._dolznost = dolznost
    }

    get dolznost()
    {
        return this._dolznost
    }

    setImya(imya){
        this._imya = imya
    }

    setOtdelenie(otdelenie){
        this._otdelenie = otdelenie
    }

    get otdelenie(){
        return this._otdelenie
    }

    setRaspisanie(raspisanie){
        this._raspisanie = raspisanie
    }

    get raspisanie(){
        return this._raspisanie
    }

    setOtchestvo(otchestvo){
        this._otchestvo = otchestvo
    }

    setNomer_telefona(nomer){
        this._nomer_telefona = nomer
    }

    get familia() {
        return this._familia
    }

    get imya() {
        return this._imya
    }

    get otchestvo() {
        return this._otchestvo
    }

    get nomer() {
        return this._nomer_telefona
    }

    setDoctors(doctors){
        this._doctors = doctors
    }

    get doctors(){
        return this._doctors
    }
}