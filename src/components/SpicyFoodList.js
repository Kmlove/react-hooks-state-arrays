import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood]);
  }

  function handleLiClick(id) {
    const newArray = foods.map((food) => {
      if (food.id !== id) {
        return food;
      } else {
        food.heatLevel++;
        return food;
      }
    });

    setFoods(newArray);
  }

  function handleChange(e) {
  //   let filteredArray;
  //   if (e.target.value === "All") {
  //     filteredArray = spicyFoods;
  //   } else {
  //     filteredArray = foods.filter((food) => {
  //       return e.target.value === food.cuisine;
  //     });
  //   }

  //   setFoods(filteredArray);
    setFilterBy(e.target.value)
  }

  const displayArray = foods.filter((food) => {
    if(filterBy === "All"){
      return true
    } else{
      return food.cuisine === filterBy
    }
  })

  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={() => handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  const foodList = displayArray.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
