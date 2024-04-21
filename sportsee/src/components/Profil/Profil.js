import React, { useState, useEffect } from 'react';
import "./Profil.css"

const Profil = () => {
    const [userInfos, setUserInfos] = useState(null);

    useEffect(() => {
        const url = "http://localhost:3000/user/12";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // Mettre à jour l'état avec les données récupérées
                setUserInfos(data.data.userInfos);
               
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []); // Exécute une seule fois après le montage du composant

    if (!userInfos) {
        return <div>Loading...</div>;
    }
    return (
        <div>
             <h1 class="titre-accueil">Bonjour <span className="firstname" >{userInfos.firstName}</span></h1>
                    <p class="felicitation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Profil;