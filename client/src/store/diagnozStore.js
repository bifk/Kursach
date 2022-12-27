import {makeAutoObservable} from "mobx";

export default class DiagnozStore {
    constructor() {
        this._diagnozes = []
        this._diagnozesName = []
        this._diag = []
        this._stepen_boli = {}
        this._name = {}
        this._img = {}
        this._dat = []
        makeAutoObservable(this)
    }

    setDiag(diag, i){
        this._diag[i] = diag
    }

    get diag(){
        return this._diag
    }

    setDat(time, i){
        this._dat[i] = time
    }

    get dat(){
        return this._dat
    }

    setDiagnozes(diagnozes){
        this._diagnozes = diagnozes
    }

    get diagnozes(){
        return this._diagnozes
    }

    setDiagnozesName(diagnozesName){
        this._diagnozesName = diagnozesName
    }

    get diagnozesName(){
        return this._diagnozesName
    }

    setStepen_boli(stepen_boli){
        this._stepen_boli = stepen_boli
    }

    setName(name){
        this._name = name
    }

    setImg(img){
        this._img = img
    }

    get stepen_boli(){
        return this._stepen_boli
    }

    get name(){
        return this._name
    }

    get img(){
        return this._img
    }




}