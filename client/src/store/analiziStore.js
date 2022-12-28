import {makeAutoObservable} from "mobx";

export default class AnaliziStore {
    constructor() {
        this._analizis = []
        this._id = {}
        this._analizisP =[]
        makeAutoObservable(this)
    }

    setAnaliziP(analiziP){
        this._analizisP = analiziP
    }

    get analiziP(){
        return this._analizisP
    }

    setAnalizis(analizis){
        this._analizis = analizis
    }

    get analizis(){
        return this._analizis
    }

    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }


}