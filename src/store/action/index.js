const AddNewUser = () => {
    let newUser = {
        id: 4,
        name: "smith",
        email: "smith@gmail.com",
        country: "Australia"

    };
    return (dispatch) => {
        dispatch({ type: "add_new_user", payload: newUser })
    }
}

export { AddNewUser }