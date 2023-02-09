import React from "react";
// import Bttn from "./Bttn";

const List = (props) => {



    return (
        <div >
            <div class="delete">
                <button onClick={() => {
                    props.onSelect(
                        props.id
                    );
                }}>x</button>
            </div >
            <li>{props.text}</li>
        </div>
    );
}

export default List;