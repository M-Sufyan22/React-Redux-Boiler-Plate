const INITIAL_STATE = {
    user: [{
        name: "sufyan",
        email: "sufyan@gmail.com",
        age: 20,
        status: "Single"
    }, ]
};

const store = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "addNewUser":
            return ({
                ...state,
                user: [...state.user, action.payload]
            })
        default:
            return (state)
    }
};
export default store;