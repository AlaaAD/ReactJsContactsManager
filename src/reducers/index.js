import { combineReducers } from 'redux'
import ContactsReducer from './ContactsReducer'


export default combineReducers({
    myContacts: ContactsReducer
})
