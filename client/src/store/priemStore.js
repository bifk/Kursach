import {makeAutoObservable} from "mobx";

export default class PriemStore {
    constructor() {
        this._priems = []
        makeAutoObservable(this)
    }

    setPriems(priems){
        this._priems = priems
    }

    get priems(){
        return this._priems
    }



}