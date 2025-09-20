import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

// store context provider function

const StoreContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({});
	// Add to the Cart
	const addToCart = (itemId) => {
		if (!cartItems[itemId]) {
			// already not in the cart?
			setCartItems((prev) => ({ ...prev, [itemId]: 1 })); // New Entry: input product count as 1
		} else {
			// already in the cart?
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // New Entry: add to the previous product count
		}
	};

	// Remove from the Cart
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // remove the product count
	};

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const contextValue = {
		food_list,
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
	};
	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
