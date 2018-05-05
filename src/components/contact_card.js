import React from 'react';

export default props => {
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">
                </div>
                <div className="card-block">
                    <h4 className="card-title">{props.firstName} {props.lastName}</h4>
                    <div className="card-text">
                        <p>
                            <b> Phone:{props.phoneNumber} </b>
                        </p>
                        <p>
                            <b> Email:{props.email}</b>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}