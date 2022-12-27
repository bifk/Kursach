import {makeAutoObservable} from "mobx";

export default class RaspisanieStore {
    constructor() {
        this._id = {}
        this._den = {}
        this._time = {}
        this._raspisanies = []
        makeAutoObservable(this)
    }



    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }

    setDen(den){
        this._den = den
    }

    setTime(time){
        this._time = time
    }



    setRaspisanies(raspisanies){
        this._raspisanies = raspisanies
    }

    get raspisanies(){
        return this._raspisanies
    }

    get den(){
        return this._den
    }

    get time(){
        return this._time
    }





}