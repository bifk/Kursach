import {makeAutoObservable} from "mobx";

export default class UlicaStore {
    constructor() {
        this._id = {} // id
        this._nazvanie = {}
        this._ulicas = []
        //makeAutoObservable(this)
    }

    setNazvanie(nazvanie){
        this._nazvanie = nazvanie
    }

    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }



    setUlicas(ulicas){
        this._ulicas = ulicas
    }

    get ulicas(){
        return this._ulicas
    }

    get nazvanie(){
        return this._nazvanie
    }



}