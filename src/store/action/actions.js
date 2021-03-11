const addNewUser = (newUser) => {
    return (dispatch) => {
        dispatch({ type: "addNewUser", payload: newUser });
        console.log(newUser);
    }
}

export { addNewUser };