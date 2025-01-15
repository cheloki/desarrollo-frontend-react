import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
const About = () => {
    /*   const count = useSelector((state) => state.product.initialValue)
       return (
           <>
   
               <p>Component About {count}</p>
              
           </>
       );
       */
    const [nameComponent, setNameComponent] = useState('About');
    return (
        <>
            <p> Componen {nameComponent}</p>
            
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
        </>
    );
}
export default About;