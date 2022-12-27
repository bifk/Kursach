import {makeAutoObservable} from "mobx";

export default class PacientStore {
    constructor() {
        this._pacient = {}
        this._id = {}
        this._pacient1 = {}
        this._familia = {}
        this._imya = {}
        this._otchestvo = {}
        this._nomer_polisa = {}
        this._email = {}
        this._dob = {}
        this._ulica = {}
        this._gorod = {}
        this._dom = {}
        this._kvartira = {}
        this._medkartid = {}
        makeAutoObservable(this)
    }


    setMedKartId(medkartid){
        this._medkartid = medkartid
    }

    get medkartid() {
        return this._medkartid
    }


    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }

    setFamiliaP(familia){
        this._familia = familia
    }

    setImya(imya){
        this._imya = imya
    }

    setOtchestvo(otchestvo){
        this._otchestvo = otchestvo
    }

    setNomer_polisa(polis){
        this._nomer_polisa = polis
    }

    setPacient(pacient){
        this._pacient = pacient
    }
    setPacient1(pacient){
        this._pacient1 = pacient
    }

    get familiaa() {
        return this._familia
    }

    get imya() {
        return this._imya
    }

    get otchestvo() {
        return this._otchestvo
    }

    get nomer() {
        return this._nomer_polisa
    }

    get pacient1()
    {
        return this._pacient1
    }

    setEmail(email){
        this._email = email
    }

    get email(){
        return this._email
    }

    setDob(dob){
        this._dob = dob
    }

    get dob(){
        return this._dob
    }


    setUlica(ulica){
        this._ulica = ulica
    }

    get ulica(){
        return this._ulica
    }
    setDom(dom){
        this._dom = dom
    }

    get dom(){
        return this._dom
    }
    setGorod(gorod){
        this._gorod = gorod
    }

    get gorod(){
        return this._gorod
    }
    setKvartira(kvartira){
        this._kvartira = kvartira
    }

    get kvartira(){
        return this._kvartira
    }

    deletePacient(){
        this._pacient = {}
        this._familia = {}
        this._imya = {}
        this._otchestvo = {}
        this._nomer_polisa = {}
        this._email = {}
        this._dob = {}
    }
}