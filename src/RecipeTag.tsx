import React from 'react';

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    return (
        <li>
            <button onClick={() => onSelectTag(tagName)}>{tagName}</button>
        </li>
    );
};

export default RecipeTag;
