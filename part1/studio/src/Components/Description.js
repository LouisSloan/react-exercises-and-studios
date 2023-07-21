import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor (){
let authorLink = 'https://www.allrecipes.com/recipe/270779/hot-banana-water/';
let authorPhoto = 'https://www.allrecipes.com/img/icons/generic-author.svg';
let authorName = "Gam Gam";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Default Icon" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Allrecipes</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render() {
      return(
    <div> 
    <div>
       <h1>Recipe Title</h1>
       <p>Short recipe description</p>
    </div>
    <RecipeAuthor />
 </div>)
    } 
}

export default RecipeDescription;