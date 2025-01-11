import { createContext, useState } from 'react';

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { }
})

function FavouriteContextProvider({ children }) {
    const [favouriteMeaksIds, setFavouriteMeaksIds] = useState([]);

    function addFavourite(id) {

        setFavouriteMeaksIds((currentFavIds) => [...currentFavIds, ids]);
    }
    function removeFavourite(id) {
        setFavouriteMeaksIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const value = {
        id: favouriteMeaksIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }
    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavouriteContextProvider;