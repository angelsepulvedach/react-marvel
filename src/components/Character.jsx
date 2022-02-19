import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import propTypes from "prop-types";
import {ReactComponent as SVGStar} from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import {Button, Card} from "react-bootstrap";
import "../assets/styles/Components/Character.css";

const Character = (props) => {
    const [modal,setModal] = useState(false);
    const [favorite,setFavorite] = useState(false);

    const { data,favoriteCharacters } = props;
    const { id, name,thumbnail } = data;

    const handleCloseModal = () =>{
        setModal(false);
    };

    const handleOpenModal = () =>{
      setModal(true);
    }

    const handleSetFavorite = () => {
       props.setFavorite({data});
       setFavorite(true);
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
        setFavorite(false);
    };

    const isFavorite = () => {
        const result = favoriteCharacters.filter(
            (favoriteCharacter) => favoriteCharacter.data.id === id
        );
        if (result.length) {
            setFavorite(true);
        }
    };

    useEffect(() => {
        isFavorite()
    });

    return(
        <Card className="p-2 m-5 col-md-2 card-section">
            <div>
                <div className="card-header-character rounded pb-5 text-center">
                   <h2 className="card-header-title text-white pt-3">{name}</h2>
                </div>
            </div>
            <Card.Body>
                <Card.Img variant="top" src={thumbnail.path + "." + thumbnail.extension}
                          className="character-image"/>
                <Card.Text>
                    {favorite ? (
                        <SVGStar
                            onClick={() => handleDeleteFavorite(id)}
                            className="character-details-star favorite"
                        />
                    ) : (
                        <SVGStar
                            onClick={handleSetFavorite}
                            className="character-details-star noFavorite"
                        />
                    )}
                </Card.Text>
                <Button variant="dark" onClick={handleOpenModal}>ver info</Button>
            </Card.Body>
        </Card>
    )
};

//documentacion de proptypes
Character.propTypes = {
    data: propTypes.object,
    modal: propTypes.bool,
    favorite: propTypes.bool
};

const mapStateToProps = (state) =>{
  return {
      favoriteCharacters: state.favoriteCharacters,
  }
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
};

export  default connect(mapStateToProps,mapDispatchToProps)(Character);