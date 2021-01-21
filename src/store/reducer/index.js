const INITIALIZE_STATE = {
    users: [{
            id: 1,
            name: "sufyan",
            email: "mmuhammadsufyan5@gmail.com",
            country: "Pakistan"
        },
        {
            id: 1,
            name: "Ahmed",
            email: "Ahmed@gmail.com",
            country: "Australia"
        },
        {
            id: 1,
            name: "John",
            email: "jhonDoi@gmail.com",
            country: "USA"
        }
    ],
    products: [{
            p_id: 1,
            tittle: "New Amazing Watch",
            brand: "Rolex",
            price: "$100"
        },
        {
            p_id: 2,
            tittle: "Gaming Mouse",
            brand: "Asus",
            price: "$25"
        },
        {
            p_id: 3,
            tittle: "Gmaing Keyboard",
            brand: "Asus",
            price: "$70"
        }
    ]
}


const store = (state = INITIALIZE_STATE, action) => {
    switch (action.type) {
        case "add_new_user":
            return ({
                ...state,
                ...state.users.push(action.payload)
            })
        default:
            return (state)
    }
};

export default store;