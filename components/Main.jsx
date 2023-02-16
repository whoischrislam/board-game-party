import React from "react"

export default function Main(){
    
    const clickToSite = () => {
        window.open('https://boardgamegeek.com/collection/user/NuanceOne?sort=wishlist&sortdir=asc&rankobjecttype=subtype&rankobjectid=1&columns=title%7Cthumbnail%7Cstatus%7Cwishlistcomment%7Cshop&geekranks=Board%20Game%20Rank&own=1&wishlist=0&objecttype=thing&ff=1&subtype=boardgame', '_blank', 'noreferrer');
        // window.location.href = "https://google.com";
    }

    return (
        <div className="main">
            <div className="content">
                <img className="avatar" src="../chris.png"/>
                <h3>Whoischrislam</h3>
                <p>57 games owned</p>
                <p>Plays once a week</p>
                <p>Plays with 3 groups</p>
                <button onClick={clickToSite}><img src="../bgg.png" />profile</button>
            </div>
        </div>
    );
}