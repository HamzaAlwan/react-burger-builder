import * as actionTypes from "./actions";

const initialState = {
	ingredients: {
		salad: 1,
		cheese: 1,
		meat: 1,
		beefBacon: 1,
	},
	totalPrice: 6.90,
};

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	beefBacon: 0.7,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1,
				},
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
			};
		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1,
				},
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
			};
		default:
			return state;
	}
};

export default reducer;
