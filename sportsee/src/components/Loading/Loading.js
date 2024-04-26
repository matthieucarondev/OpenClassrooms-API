
import React from 'react';
import logo from "@/asset/rondLogo.svg";
import "./Loading.css"




const Loading = () => {
    return (
        <div className='Loading'>
             <img src={logo} alt="logo SportSee" className="loadingLogo rotating" />
          <p className='Loading-text'>Loading...</p>
        </div>
    );
};

export default Loading;