import styles from './Description.module.css';

export default function RecipePhoto(){
    return (
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6557629.jpg&q=60&c=sc&orient=true&poi=auto&h=512" alt="Banana Water" className = {styles.imageUpdates} />
    )
}