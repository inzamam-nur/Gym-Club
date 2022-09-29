
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
const [activity,setActivity] = useState([]); 
   useEffect(()=>{
        fetch('activity.json')
        .then(res=>res.json())
        .then(data =>setActivity(data))
    },[]);

const [cart,setCart] =useState([])
      const handleClick =(card) =>{
          const newCart = [...cart,card];
          setCart(newCart);
    }
    return (
        <div className='home-container'>

            <div className="">
                <div className="header ">
                <h1>MY-Gym-ACTIVITIES </h1>
                </div>

                
                    <div className="activity-container">

                        {
                            activity.map(cards =><Activity cards={cards} key={cards.name}
                            handleClick={handleClick} ></Activity>)
                        }
          
                     </div>
              </div>
                <div className="carts-container">
                        <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Home;