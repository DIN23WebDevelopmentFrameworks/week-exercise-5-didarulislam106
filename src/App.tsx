// src/App.tsx

import React, { useState, useEffect } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { IRecipe } from "./types";

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("https://dummyjson.com/recipes/tags");
      const data = await response.json();
      setTags(data);
    };

    fetchTags();
  }, []);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
    fetchRecipesByTag(tagName);
  };

  const fetchRecipesByTag = async (tag: string) => {
    const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
    const data = await response.json();
    setRecipes(data.recipes);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1> 
      {selectedTag ? (
        <RecipeList recipes={recipes} onBack={handleBackToTags} />
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      )}
    </div>
  );
};

export default App;
