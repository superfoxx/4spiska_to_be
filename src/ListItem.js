import React from 'react';


const ListItem = (props) => {


    return (
        <div className="card" >

                <ul>
                    <li className="list-inline">{props.el.user}  </li>
                <br/>
                    <li className="list-group">{props.el.gender} </li>
        <button disabled={props.group === 1} onClick={()=>props.move(props.el.id, - 1)}>Up</button>
        <button disabled={props.group === props.lastItem} onClick={()=>props.move(props.el.id, + 1)}>Down</button>

            </ul>
        </div>
    );
};

export default ListItem;