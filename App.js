import React, { useState } from "react";
import List from "./List";
import Heading from "./Heading";

const App = () => {
    const [setname, getname] = useState("");
    const [setitem, getitem] = useState([]);

    const updateName = (event) => {
        getname(event.target.value);

    }
    const updateitem = () => {

        getitem((previtem) => {
            return [...previtem, setname];
        });
        getname("");
    }

    const deleted = (id) => {
        getitem((previtem) => {
            return previtem.filter((arrElement, index) => {
                return index !== id
            })
        })
    }

    return (
        <div class="container">
            <div class="heading">

                <h1 >To Do List</h1>
            </div>
            <form onSubmit={(event) => event.preventDefault()} class="form">
                <input type="Text" placeholder="Enter your text" onChange={updateName} value={setname}></input>

                <button type="submit" onClick={updateitem}><span>Add</span></button>
                <ol>
                    {/* {<li>{setitem}</li>}  */}
                    {setitem.map((itemval, index) => {
                        return <List
                            text={itemval}
                            id={index}
                            key={index}
                            onSelect={deleted}
                        />
                    })}
                </ol>
            </form>

        </div>
    );

}

export default App;