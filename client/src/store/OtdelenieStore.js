import {makeAutoObservable} from "mobx";

export default class OtdelenieStore {
    constructor() {
        this._corpus = {}
        this._name = {}
        this._zaved = {}
        this._otdelenies = []
        this._otdelenie = {}
        makeAutoObservable(this)
    }

    setCorpus(corpus){
        this._corpus = corpus
    }

    setZaved(zaved){
        this._zaved = zaved
    }

    setName(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    get corpus(){
        return this._corpus
    }

    get zaved(){
        return this._zaved
    }

    setOtledenies(otdelenies){
        this._otdelenies = otdelenies
    }

    get otdelenies(){
        return this._otdelenies
    }

    setOtledenie(otdelenie){
        this._otdelenie = otdelenie
    }

    get otdeleniee(){
        return this._otdelenie
    }

}