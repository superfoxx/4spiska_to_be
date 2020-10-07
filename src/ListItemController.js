import React from 'react';
import ListItem from "./ListItem";


const ListItemController = (props) => {


    return (
        <div>
            <div className='card' >{props.group}</div>

            <ul>

            <li>
            {props.list.filter(el=> el.group === props.group).map((el, index) => <ListItem group={props.group} el={el} index={props.index} move={props.move} lastItem={props.lastItem} /> )}
            </li>
            <hr/>
            </ul>
        </div>
    );
};

export default ListItemController;