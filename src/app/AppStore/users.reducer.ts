import { Action } from '@ngrx/store';

export interface AppState {
    users : Array<IUser> | []
}
export interface ActionWithPayload<T> extends Action {
    payload: T;
  } 
export interface IUser {
    first_name: string,
    email: string,
    last_name: string
    age: number
}

export const ACTIONS = {
    USER_LOADED: 'USER_LOADED',
    FILTER_USED: 'FILTER_USED',
    USER_DELETED: 'USER_DELETED'
}

export function userReducer(state: Array<IUser>, action: ActionWithPayload<any>): Array<IUser>
  {
    switch (action.type) {
        case ACTIONS.USER_LOADED:
            return Array.prototype.concat(action.payload.users)
        case ACTIONS.USER_DELETED:
              var tempArray =[...state];
              tempArray.splice(action.payload, 1)
               return Array.prototype.concat(tempArray)
        case ACTIONS.FILTER_USED: 
              var tempArray = [...state]
              var filteredArray = tempArray.filter((elem) => {
                  if(elem.first_name.toLowerCase().includes(action.payload.first?.toString().toLowerCase()) 
                  || elem.last_name.toLowerCase().includes(action.payload.last?.toLowerCase()) 
                  || elem.email.toLowerCase().includes(action.payload.email?.toLowerCase())
                  || elem.age === action.payload.age)
                   return true;
              })
              return Array.prototype.concat(filteredArray)         
            default:
            return state;
    }
}