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

    doneTodo(id:string){
        const todo = this._todos.filter((e) => e.id === id)[0]
        todo.done = !todo.done
    }
}


export const Store = new Storage() 