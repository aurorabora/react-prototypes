import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber(){
    return Math.floor(Math.random()*100)+1;
}

const user={
    name: 'Bora',
    luckyNumber: luckyNumber()
}

function greeting(user){
    return <div className="container">      
    <h1>HI {user.name}</h1>
    <h2 className= "textMuted">your lucky number is: {user.luckyNumber}</h2>
    </div>     
    
}


ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

