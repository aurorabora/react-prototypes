import React from 'react';


function Table () {
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
        </table>
    )
}
export default Table;

