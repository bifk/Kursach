import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._name = {}
        this._role = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    setName(name){
        this._name = name
    }

    setRole(role){
        this._role = role
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }

    get name() {
        return this._name
    }

    get therole() {
        return this._role
    }


}