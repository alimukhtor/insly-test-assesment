import { ACTION } from "../actions"

const AppReducer =(state, action)=> {
    switch(action.type){
        case ACTION.REMOVE_USER:
            return {
                users: state.users.filter(user => user.id !== action.payload)
            }
        case ACTION.ADD_USER:
            return {
                users:[...state.users, action.payload]
            }

        case 'INCREAMENT':
            return {
                counter: state.counter+1
            }
            
        case 'DECREMENT':
            return {
                counter: state.counter-1
            }
        case "ADD_FAV":
            return {
                fav:[...state.fav, action.payload]
            }    
        default:
            return state
    }
}
export default AppReducer