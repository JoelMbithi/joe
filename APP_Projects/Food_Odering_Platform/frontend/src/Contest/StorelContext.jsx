import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) {
                return { ...prev, [itemId]: 1 };
            } else {
                return { ...prev, [itemId]: prev[itemId] + 1 };
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] === 1) {
                const newCartItems = { ...prev };
                delete newCartItems[itemId];
                return newCartItems;
            } else {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data); // assuming the data is in response.data.data
        } catch (error) {
            console.error("Failed to fetch food list:", error);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
            await fetchFoodList();
        };
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};



export default StoreContextProvider;
