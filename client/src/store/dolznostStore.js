import {makeAutoObservable} from "mobx";

export default class DolznostStore {
    constructor() {
        this._chota = {} // id
        this._name = {}
        this._salary = {}
        this._dolznosts = []
        makeAutoObservable(this)
    }

    setName(name){
        this._name = name
    }

    setChota(chota){
        this._chota = chota
    }

    get chota(){
        return this._chota
    }

    setSalary(salary){
        this._salary = salary
    }

    setDolznosts(dolznosts){
        this._dolznosts = dolznosts
    }

    get dolznosts(){
        return this._dolznosts
    }

    get nameD(){
        return this._name
    }

    get salary(){
        return this._salary
    }

}