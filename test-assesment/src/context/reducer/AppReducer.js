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
        default:
            return state
    }
}
export default AppReducer