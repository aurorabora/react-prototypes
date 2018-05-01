import React from 'react';


function Table(props) {
    const tableRows = props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });

    return (
        <table className="table">
            <thead className="thead-inverse">
                {tableRows}
            </thead>
        </table>
    )
}

// const tableRows = props.data.map((item, index) => {
// console.log(item);
// return;

// });

export default Table;