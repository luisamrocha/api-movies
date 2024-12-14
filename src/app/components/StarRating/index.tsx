import React from 'react'
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"
import './index.scss'


export interface Props{
    rating:number
}

export default function StarRating(props: Props){
    const numStars = Math.round(props.rating/2)

    const fullStars =[]
    const emptyStars = []

    for (let i =0;i<5;i++){
        if(i<numStars){
            fullStars.push(i)
        } else{
            emptyStars.push(i)
        }
    }

    return(
        <div>
            {fullStars.map(index => 
                <FaStar key={index} style={{ color: '#f3eb00' }} />
            )}
            {emptyStars.map(index => 
                <FaRegStar key={index} style={{ color: '#f3eb00' }} />
            )}
            
        </div>
    )
}