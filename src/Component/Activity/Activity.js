import './Activity.css';

const Activity = (props) => {

    const {handleClick,cards} = props;
    const {name,img,about,time,start} = cards
    return (
         <div className='cards'>
            <div className="card-info">
            <img className='img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{about}</p>
            <p>AT : {start}</p>
            <h4>Time Spent: {time} <i>Minute</i></h4>
            </div>
            <button  onClick={()=>handleClick(cards)}>Add to Cart</button>
       </div>
    );
};

export default Activity;