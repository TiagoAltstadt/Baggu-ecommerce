import React from 'react';

function TableContent(props) {
    return ( 
        <tbody>
            <tr>
                <th scope="row">{props.id}</th>
                    <td>{props.image}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.brand}</td>
                <td>{props.category}</td>
            </tr>
        </tbody>
    );
}

export default TableContent;