import React from "react";

const Card = (props) => {
//console.log(props);
    return (
        <div className="card-main">
                <div className="card">
                    <div className="card-name">
                        <span>{props.name}</span>
                    </div>
                    <div className="card-uname">
                        <span>{props.username}</span>
                    </div>
                    <div className="card-email">
                        <span>{props.email}</span>
                    </div>
                    <div className="card-phone">
                        <span>{props.phone}</span>
                    </div>
                </div>
        </div>
    );
}

export default Card;