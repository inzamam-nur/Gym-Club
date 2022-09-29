import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import img from './image/inzamam.jpg';


const Cart = (props) => {

    const notify = () => toast("My Activity Complete!");
    const {cart} = props;
  
let total =0;
        for(const time of cart){
            total = total+ time.time;
        }

const [breaks,setBreaks] = useState('');
useEffect(()=>{

    const savednum = localStorage.getItem("time");
            if(savednum){
                setBreaks(savednum);
            }


},[])

const addToDb = num=>{
    localStorage.setItem("time",num);
    const savednum = localStorage.getItem("time");
    setBreaks(savednum);

}

    return (
        <div className='cart-container'>
            <div className="profile">
                <div className="name">
                    <img className='img-2' src={img} alt="" />
                    <p><b>inzamam Nur</b><i> inzamamnur.14@gmail.com</i></p>
                </div>
                <div className="my-info my-4">
                    <p><b>90</b> <i>kg</i></p>
                    <p><b>6.00</b> <i>foot</i></p>
                    <p><b>23</b> <i>Years</i></p>
                </div>
                <h2>Add A Break</h2>
                <div className="break-btn">
                    <button onClick={()=>addToDb(10)}>10s</button>
                    <button onClick={()=>addToDb(20)}>20s</button>
                    <button onClick={()=>addToDb(30)}>30s</button>
                    <button onClick={()=>addToDb(40)}>40s</button>
                    <button onClick={()=>addToDb(50)}>50s</button>
                </div>
                <h2>ROUTINE TIME</h2>
                <div className="routine-detail">
                    <p>
                      <span><b>ROUTINE TIME :</b></span>  <span>{total} Minute</span>

                    </p>
                    <p>
                        <span><b>BREAK TIME :</b></span>
                        <span>{breaks} <i>second</i></span>
                    </p>
                </div>
            </div>
            <button className='btn_completed' onClick={notify}>Activity Completed</button>
        <ToastContainer />
        </div>
    );
};

export default Cart;