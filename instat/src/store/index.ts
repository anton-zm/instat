import { makeAutoObservable } from "mobx"
import { DealType } from '../components/deal'


class Storage {

    _todos: DealType[] = []
    
    constructor(){
        makeAutoObservable(this)
    }

    get Todos(){
        return this._todos 
    }

    addTodo(todo:DealType){
        this._todos.push(todo)
    }
}


export const Store = new Storage() 