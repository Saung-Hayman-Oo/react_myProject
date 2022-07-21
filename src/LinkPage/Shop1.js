import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Shop1 = () => {
    const [items, setItems] = useState([]);
    const id=1;
    const getShop = async () => {
           
        await fetch('http://localhost:8000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log(items);
                
            })
    
        }
     
        useEffect(() => {
            getShop()
        }, [id])
    return ( 
        <div className="container mx-auto grid grid-cols-3 gap-10">
             {
                 
                items.map( item => {
                    return (
                        <div key={item.id}>
                            <h2 className="text-2xl text-gray-500 my-5">{item.name}</h2>
                            <Link to={`/shop/${item.id}`}>
                                <img src={item.icon} className="w-full h-96 bg-gray-400 bg-cover overflow-hidden bg-opacity-25 shadow rounded-md hover:shadow-md hover:transform  hover:scale-90 transition ease-out duration-500" alt="img"></img>
                            </Link>
                        </div>
                    )
                })
                
             }
        </div>
     );
}
 
export default Shop1;