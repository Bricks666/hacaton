import React, { useContext } from "react";

export const CityContext = React.createContext();

export const useCityContext = () => {
	return useContext(CityContext);
};
