import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./action"
import { combineReducers } from "redux"
const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: []  
}

function todos(state = [], action){
  switch (action.type){
    case ADD_TODO:
      return [
        ...state, 
        {
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
          if(index === action.index){
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
      return todo
    })
  default;
    return state
  }
}

const todoApp = combineReducers({
  visibilityFilter, 
  todos
})

function visibilityFilter(state = SHOW_ALL, action){
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default; 
      return state
  }
}

export default todoApp