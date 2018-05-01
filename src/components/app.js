import React from 'react';
import Table from './table.js'
// way 1
// export function App()
// import {App} from './app';

function App() {
    return (
        
        <div className="container">
            <h1>Student Grade Table </h1>
            <Table data= {students}/>
        </div > 
    )
}

const students=[
    {
        name:'Steve',
        course: 'Meowing',
        grade: 90

    },

    {
        name:'Batman',
        course: 'Catnip',
        grade: 100
    },

    {
        name:'Linda',
        course: 'laser Pointers',
        grade:100
    }
];

export default App;

// import App from './app';

// way 3
// export default props =>
// import App from './app';

// function Table(){
//     return <Table>
// }