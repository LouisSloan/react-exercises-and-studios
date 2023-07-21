import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    const ingredients = ["1 quart of water", "2 banana peels"];
    return(
<div>
<h3>Recipe Ingredients</h3>
<ul className = {styles.ingredientList}>
   <li>{ingredients[0]}</li>
   <li>{ingredients[1]}</li>
</ul>
</div>
    )
}