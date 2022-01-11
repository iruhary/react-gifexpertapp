import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Rihanna','Drake','José Madero'];
    const [categories, setCategories] = useState(['Rihanna']);
    
    // const handleAdd = () => {
    //     setCategories([...categories, 'Los Claxons']);
    // }

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>


            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={ category}
                        />
                    ))
                }
            </ol>

        </>
    )
}

