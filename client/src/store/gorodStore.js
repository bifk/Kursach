import {makeAutoObservable} from "mobx";

export default class GorodStore {
    constructor() {
        this._id = {} // id
        this._nazvanie = {}
        this._gorods = []
        //makeAutoObservable(this)
    }

    setNazvanie(nazvanie){
        this._nazvanie = nazvanie
    }

    setId(id){
        this._id = id
    }

    get gid(){
        return this._id
    }



    setGorods(gorods){
        this._gorods = gorods
    }

    get gorods(){
        return this._gorods
    }

    get nazvanie(){
        return this._nazvanie
    }



}