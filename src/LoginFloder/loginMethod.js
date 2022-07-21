const LoginMethod = (url) => {
    useEffect(() => {
       fetch(url,{
           method : 'POST',
        //    headers:{ "Content-Type" : "application/json"},
        //    body : JSON.stringify(blog)
       })
       .then ( () => console.log("name & pass "))
       
    }, [url])
}
 
export default LoginMethod;