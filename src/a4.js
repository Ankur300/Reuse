import React from 'react';
import A1 from './a1';
import A2 from './a2';
import A3 from './a3';

 const A4 = (props) => {

  return (
    <div>
     <p>inside a4 component</p>
     <div >{props.children}</div>
    </div>
  );
};

export default A4;
