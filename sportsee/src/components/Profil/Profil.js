import React, { useState, useEffect } from 'react';
import "./Profil.css"
import { fetchUserInfos } from '../../ApiServices/ApiServices';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Profil = () => {
    const [userInfos, setUserInfos] = useState(null);
    const  {userId} = useParams();
    useEffect(() => {

        const fetchData = async () => {
            const userInfo = await fetchUserInfos(userId); // Utilisez la fonction fetchUserInfos pour récupérer les données de l'utilisateur
            setUserInfos(userInfo);
          };
          fetchData();
        }, [userId]);

    if (!userInfos) {
        return <Loading/>;
    }
    return (
        <div className="profil">
             <h1 className="titre-accueil">Bonjour <span className="firstname" >{userInfos.userInfos.firstName}</span></h1>
                    <p className="felicitation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Profil;