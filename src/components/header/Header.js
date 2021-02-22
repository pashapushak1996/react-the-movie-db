import React from 'react';

export const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDb)" width="154" height="20"/>
            <ul style={{display: 'flex', justifyContent: "space-between"}}>
                <li>Films</li>
                <li>Serials</li>
                <li>People</li>
                <li>Other</li>
            </ul>
            <div>
                +
            </div>
            <button>RU</button>
            <div>SSS</div>
            <img src={`https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png`} width={`20px`} alt=""/>
            <div>Find</div>
        </div>
    );
}

