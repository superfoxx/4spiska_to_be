import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import ListItem from "./ListItem";
import ListItemController from "./ListItemController"
import "bootstrap/dist/css/bootstrap.css"


function App() {

    // 4 spiska s raznimi perehodami

    const initialList = [

            {id: uuidv4(), user: 'Petr', gender: 'male', active: true, group: 1},
            {id: uuidv4(), user: 'Galina', gender: 'female', active: true, group:1},
            {id: uuidv4(), user: 'Vasiliy', gender: 'male', active: false, group: 2},
            {id: uuidv4(), user: 'Anatoliy', gender: 'male', active: false, group: 2},
            {id: uuidv4(), user: 'Igor', gender: 'male', active: false, group: 3},
            {id: uuidv4(), user: 'Oleg', gender: 'male', active: false, group: 3},
            {id: uuidv4(), user: 'Daria', gender: 'female', active: false, group: 4},
            {id: uuidv4(), user: 'Elena', gender: 'female', active: false, group: 4},
            {id: uuidv4(), user: 'Elena', gender: 'female', active: false, group: 4},
            {id: uuidv4(), user: 'Elena', gender: 'female', active: false, group: 4},
            {id: uuidv4(), user: 'Elena', gender: 'female', active: false, group: 4},

    ];

    const listNumber = [1, 2, 3, 4];
    const [numberOfGroups, setNumberOfGroups] = useState(listNumber);
    const [numberInput, setNumberInput] = useState('');

   const groupcreate = () => {
       const newAr = [];
        for (let i = 1; i<= numberInput; i++){
         newAr.push(i);
        }
        setNumberOfGroups(newAr)
    }


  // const initialList2 = [
  //     {id: 3,    user: "Vasili", gender: "m", active: false},
  //   {id: 4,    user: "Viktor", gender: "m", active: true }];

  const [list, setList] = useState(initialList);
 // const [list2, setList2] = useState(initialList);

  // const moveFromList1 = (id) => {
  //   const item = list1.find(el => el.id === id);
  //
  //   setList2([...list2, item]);
  //   setList1(
  //       list1.filter(el => el.id !== id)
  //   )
  // }
  // const moveFromList2 = (id) => {
  //   const item = list2.find(el => el.id === id);
  //
  //   setList1([...list1, item]);
  //   setList2(
  //       list2.filter(el => el.id !== id)
  //   )
  // }

    const move = (groupId, value) => {
        const newAr = list.map(el => {
            if(el.id === groupId){
               el.group= el.group + value;
                }
return el
        })
  setList(newAr)
    }


  return (
//     <div >
// List1
//       {/*<input onChange={(e)=>e.target.value}/>*/}
//       {list1.map(el => <li>{el.user}**{el.gender}**{el.active.toString()}
//   <button onClick={()=>moveFromList1(el.id)}>Move to the other list</button>
//       </li>)
//       }
//       <hr/>
//      List2
//       {/*<input onChange={(e)=>e.target.value}/>*/}
//       {list2.map(el => <li>{el.user}**{el.gender}**{el.active.toString()}
//       <button onClick={()=>moveFromList2(el.id)}>Move to the other list</button>
//       </li>)
//       }

    <div className='container'>
    <div>
        <input type='number' onChange={(e)=>setNumberInput(e.target.value)}
        value={numberInput}/>
        <button onClick={groupcreate}>Push</button>
        <hr/>
    </div>

        <div className='card-deck'> {numberOfGroups.map((el, index) => <ListItemController group={el}
                                                                index={index}
                                                                list={list}
                                                                move={move}
                                                                lastItem={numberOfGroups.length}


        />)}
        </div>


    </div>
      // </div>
  );
}

export default App;
