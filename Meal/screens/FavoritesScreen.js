import { View,Text,StyleSheet } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
// import { useContext } from 'react';
// import FavouriteContext from '../store/context/favourite-context';
import { MEALS } from '../data/dummy-data';

import {useSelector} from 'react-redux';

function FavoritesScreen() {
  const favoriteMealsids =useSelector(state => state.favouriteMeals.ids);
  
  // const favouriteMealsCtx = useContext(FavouriteContext);
  // const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id))

  const favouriteMeals = MEALS.filter(meal => favoriteMealsids.includes(meal.id))

  if(favouriteMeals.length === 0){
    return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You Have NO Favourite Meals</Text>
    </View>
    )
  }

  return <MealsList items={favouriteMeals} />;

}

export default FavoritesScreen;


const styles= StyleSheet.create({
    rootContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',    
    },
    text:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    }
});