import React from "react"
import TextStyle from "./TextStyle"

const NasaCard = (props) =>{

    return (
        <div>
            <h1>NASA CARD OF THR DAY HAVE FUN</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="NASA CARD OF THE DAY" />
            <TextStyle>{props.data.explanation}</TextStyle>
            <p>{props.data.copyright}</p>
        </div>
    )
}

export default NasaCard