const initialState = {
	name: localStorage.getItem("name"),
	email: localStorage.getItem("email"),
	image: localStorage.getItem("image"),
	type: localStorage.getItem("type"),
	token: localStorage.getItem("token"),
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, ...action.payload };

		case "LOGOUT":
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export default authReducer;
