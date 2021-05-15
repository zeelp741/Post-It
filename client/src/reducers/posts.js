
// A reducer is a function that determies changrse to an application's state
// Uses the action to determine this change

export default (posts = [], action) => {

    switch(action.type){
        case 'FETCH_ALL':
            return posts
        case 'CREATE':
            return posts
        default:
            return posts
    }
}