const authActions = {
	LOGIN: (data) => {
		localStorage.setItem("name", data.name);
		localStorage.setItem("email", data.email);
		localStorage.setItem("image", data.image);
		localStorage.setItem("type", data.type);
		localStorage.setItem("token", data.token);

		return {
			type: "LOGIN",
			payload: { name: data.name, email: data.email, image: data.image, type: data.type, token: data.token },
		};
	},
	LOGOUT: () => {
		localStorage.clear();

		return {
			type: "LOGOUT",
			payload: { name: null, email: null, image: null, type: null, token: null },
		};
	},
};

export default authActions;
