import {makeAutoObservable} from "mobx";

export default class ZapicStore {
    constructor() {
        this._id = {}
        this._date = {}
        this._time = {}
        this._zapisi = []
        this._pacientid = {}
        this._doctorid = {}
        makeAutoObservable(this)
    }

    setId(id){
        this._id = id
    }

    get id(){
        return this._id
    }

    setPacientId(pacientid){
        this._pacientid = pacientid
    }

    get pacientid(){
        return this._pacientid
    }

    setDoctorId(doctorid){
        this._doctorid = doctorid
    }

    get doctorid(){
        return this._doctorid
    }

    setZapisi(zapisi){
        this._zapisi = zapisi
    }

    get zapisi(){
        return this._zapisi
    }

    setDat(date){
        this._date = date
    }

    setTim(time){
        this._time = time
    }

    get date(){
        return this._date
    }

    get time(){
        return this._time
    }

}