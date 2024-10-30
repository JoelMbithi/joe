import React, { children, createContext, useContext, useReducer} from 'react';

// Preparing data layer
export const StateContext = createContext()

//stateprovide components

export const StateProvider =({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Hook to use the stateValue from the daata Layer

export const useStateValue = () => useContext(StateContext);