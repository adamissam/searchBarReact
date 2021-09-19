import "./Card.css"

import { Image } from 'react-bootstrap'
import PropTypes from 'prop-types';
import React from 'react'

const defaultImage = "https://i.stack.imgur.com/l60Hf.png"
export default function Card(props) {
    const{imageProfile,name,gitProfil,handlePressMoreInfiamtion}=props
    return (
        <div className="col-sm-6 col-md-4 containerCard" onClick={()=>handlePressMoreInfiamtion(gitProfil)}>
            <div className="containerImage">
            <Image src={imageProfile?imageProfile:defaultImage} roundedCircle className="image"/>
            </div>
            <div className="containerInformation">
               <h6 className="name">{name?name:"Aucun"}</h6>
               <p>{""}</p> 
                </div>
        </div>
    )
}

Card.propTypes= {
    imageProfile: PropTypes.string,
      name: PropTypes.string.isRequired,
      gitProfil:PropTypes.string,
      handlePressMoreInfiamtion:PropTypes.func
  };