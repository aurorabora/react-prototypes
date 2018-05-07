import React from 'react';

export default props => {

    const { info } = props;
    return (

        <div className="container">
            <div className="center-align">
                <img src={info['im:image'][2].label} />
                <h3>{info['im:name'].label}</h3>
            </div>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <p>{info.summary.label}</p>
                    <p>link:{info.link[0].attributes.href}</p>
                    <p>preview:{info.link[1].attributes.href}</p>
                </div>

            </div>
        </div>
            );
}