import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import "./Home.css";


function Home() {
    return(
        <>
            <TopBar />
            <div className="homeContaine">
                <Sidebar /> 
                <Feed />
                <RightBar /> 
            </div>
            
        </>
    )
}



export default Home;