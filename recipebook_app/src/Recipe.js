import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './Recipe.css';
import companyLogo from './images/foodMain.jpg';

function Recipe () {
    let picture = 'images/foodMain.jpg';
    let params = useParams();
    let category = params.category;
    let backway = "/" + category
    let index = params.index;
    //let picture = params.pic;

    console.log(category)
    console.log(index)
    console.log(picture)

    const [listOfRecipes, setListOfRecipes] = useState();
    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/recipes?category=${category}`)
        .then(response => response.json())
        .then((result) => {
        setListOfRecipes(result)})
    }, [category]);


    if (listOfRecipes) {
        const title = listOfRecipes[index].title;
        const text = listOfRecipes[index].text;
        const photo = listOfRecipes[index].pic;


        return <div className='recipe_container'>
                 <h3 className='recipe_title'>{ title }</h3>
                 <p className='recipe_text'>{ text }</p>
                 <Link to= { backway } className='recipe_link'> Вернуться к списку рецептов </Link>
               </div>
    } else {
        return <div className='recipe_container'>
                   <Link to= { backway } className='recipe_link'>  Вернуться к списку рецептов </Link>
               </div>
    }
}

export default Recipe;