export const initialstate = {
    isLoggedin: false,
    userInfo:{name :'aqsa'}
} 

const isLoggedinReducers =(state = initialstate, action) => {
    switch(action.type){
        case 'Signin':
            state.isLoggedin = action.payload;
            break;
        case 'Signout':
            state.isLoggedin = action.payload;
            break;
        default:
            break;
    }
    
    return {...state};
}

export default isLoggedinReducers;