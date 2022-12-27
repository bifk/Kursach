import {makeAutoObservable} from "mobx";

export default class PlataStore {
    constructor() {
        this._id = {}
        this._name = {}
        this._price = {}
        this._platas = []
        this._description = {}
        this._payed = []
        makeAutoObservable(this)
    }


    setPayed(payed, i){
        this._payed[i] = payed
    }

    get payed(){
        return this._payed
    }


    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }

    setName(name){
        this._name = name
    }

    setPrice(price){
        this._price = price
    }

    setPlatas(platas){
        this._platas = platas
    }

    setDescription(description){
        this._description = description
    }

    get name(){
        return this._name
    }

    get price(){
        return this._price
    }

    get platas(){
        return this._platas
    }

    get description(){
        return this._description
    }


}