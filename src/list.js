import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];


export default class List extends React.Component {
  render() {
const listitems=users.map((user) =>

    
    <li key={user.id}>{user.name}</li>
);
    return (
       <>

         <ul>
         {listitems}
          </ul>
       </>
    );
  }
}
