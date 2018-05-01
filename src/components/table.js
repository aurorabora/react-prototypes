import React from 'react';


function Table (props) {
    return(
        <table className= "table">
            <thead className= "thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Canine</td>
                    <td>Best Friend</td>
                    <td>9000</td>
                </tr>
                <tr>
                    <td>Feline</td>
                    <td>Evil murderers</td>
                    <td>95555</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                        <td>Birds</td>
                        <td>Squeakums</td>
                        <td>1000</td>
                    </tr>
                </tbody>
        </table>
    )
}

const tableRows=props.data.map((item, index) => {
console.log(item);
return;

});

export default Table;


