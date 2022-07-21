import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
    const [items, setItems] = useState([]);
    const id=1;
    const getShop = async () => {
           
        await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
            .then(res => res.json())
            .then(data => {
                setItems(data.data);
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
                        <div key={item.itemId}>
                            <h2 className="text-2xl text-gray-500 my-5">{item.item.name}</h2>
                            <Link to={`/shop/${item.itemId}`}>
                                <img className="w-full bg-gray-400 bg-cover overflow-hidden bg-opacity-25 shadow rounded-md hover:shadow-md hover:transform scale-130 transition ease-out duration-500" src={item.item.images.icon} alt="img"></img>
                            </Link>
                        </div>
                    )
                })
                
             }
        </div>
     );
}
 
export default Shop;