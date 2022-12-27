import {makeAutoObservable} from "mobx";

export default class AdressStore {
    constructor() {
        this._id = {}
        this._dom = {}
        this._kvartira = {}
        this._gorid ={}
        this._ulid = {}
        //makeAutoObservable(this)
    }

    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }

   setDom(dom){
        this._dom = dom
   }

   setKvartira(kvartira){
        this._kvartira = kvartira
   }

   setGorid(gorid){
        this._gorid = gorid
   }

   setUlid(ulid){
        this._ulid = ulid
   }

   get dom(){
        return this._dom
   }

   get kvartira(){
        return this._kvartira
   }

   get gorid(){
        return this._gorid
   }

   get ulid(){
        return this._ulid
   }
}