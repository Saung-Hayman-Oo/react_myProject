import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("formData -->", formData);
    
    //   const response = await axios.post("http://localhost:8800/api/user/login",headers: { "Content-Type": "application/json" , accept: "application/json"}, formData).then((res) => res.data)
    //   console.log("login Response -->", response);

    await axios({
        method: "post",
        url: "http://localhost:8800/api/user/login",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        data: JSON.stringify(formData)
    }).then(() => {
        alert("Success");
      })
      .catch((e) => alert(e));
    // const userData = response.data
    // console.log("userData ->", userData);

   

    // await axios({
    //   method: "post",
    //   url: "http://loclhost:8800/api/user/login",
    //   data: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    //   },
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
  };
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center my-5 w-3/5">
        <label className="text-2xl text-gray-500" htmlFor="email">
          Email:
        </label>
        <input
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
          className="input-box"
          name="email"
          type="email"
          required
        />

        <label className="text-2xl text-gray-500" htmlFor="password">
          Password:
        </label>
        <input
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
          className="input-box"
          name="password"
          type="password"
          required
        />

        <button className="btn text-white text-xl" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
