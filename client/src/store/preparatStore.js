import {makeAutoObservable} from "mobx";

export default class PreparatStore {
    constructor() {
        this._id = {}
        this._preparats = []
        this._name = {}
        this._isRecipe = {}
        this._preps = []
        this._preps2 = []
        makeAutoObservable(this)
    }


    setPreps(preps){
        this._preps = preps
    }

    get preps1(){
        return this._preps
    }

    setPreps2(preps2, i){
        this._preps2[i] = preps2
    }

    get preps2(){
        return this._preps2
    }

    setId(id){
        this._id = id
    }

    setPreparats(preparats){
        this._preparats = preparats
    }

    setName(name){
        this._name = name
    }

    setIsRecipe(isRecipe){
        this._isRecipe = isRecipe
    }

    get id(){
        return this._id
    }

    get preparats(){
        return this._preparats
    }

    get name(){
        return this._name
    }

    get isRecipe(){
        return this._isRecipe
    }


}