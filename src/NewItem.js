import { useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { setPreview } from "./app/previewSlice";
import { History, useHistory } from "react-router-dom"
const NewItem = () => {
    // const [formData, setFormData] = useState({ name: "", icon: "", description: ""})
    
    // const preview= useSelector((state) => state.preview.preview)
    const [preview,setPreview] = useState();
    const dispatch = useDispatch()
    const [name, setName] = useState(" ");
    const [icon, setIcon] = useState();
    const [file, setFile] = useState();
    const [description, setDescription] = useState(" ");
    const formData = {name,description,icon:preview};
    const history = useHistory();
    
    const handleClick = (e) => {
        e.preventDefault();
       
        console.log(formData);
        console.log(preview);
        
        if(formData){
            fetch('http://localhost:8000/items' ,{
                method : 'POST',
                headers : {"Content-Type":"application/json"},
                body  : JSON.stringify(formData) 
            })
            .then(() => {
                console.log("new formData added");

                history.push('/shop');
            })
        }
    }
   
    useEffect(() => {
        if(file){
            const reader=new FileReader();
            

            reader.onloadend = () => {
                // dispatch(setPreview(reader.result));
                setPreview(reader.result);
                
            }
            reader.readAsDataURL(file);
        }else{
            // dispatch(setPreview(null));
            setPreview(null);

        }
       
    }, [file])
    return (
        <div className="container mx-auto text-2xl text-gray-500">

            <form className="w-3/5 flex flex-col justify-center my-5">
                
                <label htmlFor="name">Item Name :</label>
                <input required name="name" className="my-5 border-2 border-gray-300" type="text" value={name} onChange={ (e) => {
                    setName(e.target.value);
                }} />

                <label htmlFor="description">Description :</label>
                <textarea required name="description" className="my-5 border-2 border-gray-300" value={description} onChange={(e) => {
                  setDescription( e.target.value );
                }}/>

                <label htmlFor="icon">Item Images :</label>
                <input required name="icon" className="my-5 " type="file" value={icon} onChange={(e) => {
                // setFormData({ ...formData, 'images': e.target.value });
                  setIcon(preview);
                  const image =  e.target.files[0];
                  console.log('file',image);
                  if(image){
                    setFile(image);
                    console.log(image);
                  }else{
                      setFile(null);
                  }
                }}/>
                <button onClick={handleClick} className="px-2 py-2 my-3 bg-gray-300 rounded w-1/5">Submit</button>
            </form>
            {/* <form className="w-3/5 flex flex-col justify-center my-5">
                
                <label htmlFor="name">Item Name :</label>
                <input name="name" className="my-5 border-2 border-gray-300" type="text" value={formData.name} onChange={ (e) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value });
                }} />

                <label htmlFor="description">Description :</label>
                <textarea name="description" className="my-5 border-2 border-gray-300" value={formData.description} onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }} required />

                <label htmlFor="icon">Item Images :</label>
                <input name="icon" className="my-5 " type="file" value={formData.icon} onChange={(e) => {
                // setFormData({ ...formData, 'images': e.target.value });
                  
                  const image =  e.target.files[0];
                  console.log('file',image);
                  if(image){
                    setIcon(image);
                    console.log(icon);
                  }else{
                      setIcon(null);
                  }
                }} required />
                <button onClick={handleClick} className="px-2 py-2 my-3 bg-gray-300 rounded w-1/5">Submit</button>
            </form> */}
            {/* <p>
                {name}
            </p>
            <h1>
                {icon}
            </h1>
            <p>
                {description}
            </p>
            <p>
                {preview}
            </p>
            <img src={preview} alt="preview"></img> */}
        </div>
    );
}

export default NewItem;