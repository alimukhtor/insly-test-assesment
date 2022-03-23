import { ACTION } from "../actions"

const AppReducer =(state, action)=> {
    switch(action.type){
        case ACTION.REMOVE_USER:
            return {
                users: state.users.filter(user => user.id !== action.payload)
            }
        case "ADD_USER":
            return {
                users:[action.payload, ...state.users]
            }
        default:
            return state
    }
}
export default AppReducer