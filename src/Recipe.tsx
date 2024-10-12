import React from 'react';
import { IRecipe } from './types'; // Import your IRecipe type

interface IRecipeProps {
    recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div className="recipe-card">
            <h3>{recipeData.name}</h3>
            <img src={recipeData.image} alt={recipeData.name} />
            <h4>Ingredients:</h4>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions:</h4>
            <ol>
                {recipeData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            <p>Prep Time: {recipeData.prepTimeMinutes} minutes</p>
            <p>Cook Time: {recipeData.cookTimeMinutes} minutes</p>
            <p>Servings: {recipeData.servings}</p>
            <p>Difficulty: {recipeData.difficulty}</p>
            <p>Cuisine: {recipeData.cuisine}</p>
            <p>Calories per Serving: {recipeData.caloriesPerServing}</p>
            <p>Rating: {recipeData.rating} ({recipeData.reviewCount} reviews)</p>
        </div>
    );
};

export default Recipe;
