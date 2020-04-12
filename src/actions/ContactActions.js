import axios from 'axios'
export const getAllContacts = () => async dispatch => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type: 'GET_CONTACTS',
            payload: res.data
        })
        
    } catch (error) {
        alert(error)
    }

   
}
export const getContact = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
        type: 'GET_CONTACT',
        payload: res.data
    })
        
    } catch (error) {
        alert(error)
    }

    
}
export const deleteContact = (id) => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch( {
            type: 'DELETE_CONTACT',
            payload: id
        })
    } catch (error) {
        alert(error)
    }
    
}

export const addContact = (contact) => async dispatch => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact);
   dispatch ({
        type: 'ADD_CONTACT',
        payload: res.data
    })
    } catch (error) {
        alert(error)
    }
    
}
export const updateContact = (contact) => async dispatch => {
    try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);
   dispatch ({
        type: 'UPDATE_CONTACT',
        payload: res.data
    })
    } catch (error) {
        alert(error)
    }
    
}