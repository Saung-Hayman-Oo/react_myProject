import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const ShopDetails = () => {
    const {id}=useParams();
    const [item, setItem] = useState([]);
    const [isPending, setisPending] = useState(true)
    const getShop = async () => {
           
        await fetch('https://fortnite-api.theapinetwork.com/item/get?id='+id)
            .then(res => res.json())
            .then(data => {
                setItem(data.data);
                console.log(item);
                setisPending(false);
            })
    
        }
     
        useEffect(() => {
            getShop()
        }, [id])
    console.log(id);
    return ( 
        <div className="mx-auto container grid grid-cols-2">
            {isPending && <h2>Loading ...</h2>}
            <div>
                { item && item.item && item.item.name && <h2 className="mt-10 text-3xl text-gray-500">{item.item.name}</h2>}
                { item && item.item && item.item.images && item.item.images.icon && 
                    <img className="my-10 " src={item.item.images.icon} />
                }
            </div>
            <div className="flex flex-col justify-center items-start">
                { item && item.item && item.item.description && <p className="text-2xl text-gray-500 my-16">{item.item.description}</p>}
                { 
                    item && item.item && item.item.images && item.item.images.icon &&
                    <p>
                        
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                   
                }
                { 
                    item && item.item && item.item.images && item.item.images.icon &&
                    <h2>{ item.item.images.icon }</h2>
                }
            </div>

        </div>
     );
}
 
export default ShopDetails;