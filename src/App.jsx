// import {useEffect, useState } from "react"
// import axios from "axios";
// function App(){
//   let [users,setusers] = useState(null);
//   let [error,seterror] = useState(false);
//   let [loading,setloading]= useState(true)
//   useEffect(()=>{
// getData()
//   },[]);




// import axios from "axios"
// import { useEffect } from "react"

//   async function getData() {
//     try {
//        const response = await axios('https://jsonplaceholder.typicode.com/users');
//        console.log(response.data)
//        setusers(response.data);
//     } 
//     catch (error) {
//       console.log(error)
//       seterror(true);
//     }
//     finally{
//        setloading(false)
//     }
//   }
  
//   return(<>
//   <h1 style={{textAlign:'center'}}>All User Name</h1>
//     {users && users.map((res) => (
//           <li key={res.id}>{res.name}</li> 
//         ))}
//     {error && <h1>Error Accord</h1>}
//     {loading && <h1>loadinng...</h1>}

//   </>)
// }

// export default App


// Producat APi Call pracirse 

// import axios  from "axios";
// import {useEffect, useState } from "react";
// function App(){
//   let [data,setdata] = useState(null);
//   let [error,seterror] = useState(false);
//   let [loading,setloading] = useState(true)

//   useEffect(()=>{
//     async function getData() {
//        try {
//         const response = await axios('https://dummyjson.com/products')
//        setdata(response.data.products);
//        } catch (error) {
//         console.log(error)
//         seterror(true)
//        }
//        finally{
//         console.log('finally');
//         setloading(false)
//        }
//     }
//     getData()
//   },[])

//    return (
//      <>
//       {data && data.map((res)=>(<li key={res.id} >{res.title}</li>))}
//        {loading && <h2>Loading....</h2>}
//        {error &&<p>Error Occoured</p>}
//      </>
//    )
// }

// export  default App

// import axios from "axios"
// import { useEffect, useState } from "react"
// function App(){
// let [data,setdata] = useState(null)
//   useEffect(()=>{
//     //  fetch('https://jsonplaceholder.typicode.com/users')
//     //  .then(res => res.json())
//     //  .then((res)=>
//     //  setdata(res)) 

//   const fetchData =   async () => {
//     try {
//       const response = await axios('https://jsonplaceholder.typicode.com/users');
//       console.log(response);
//       setdata(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//     }
//      fetchData()
//   },[])

//   return (
//   <>
//    <h1>"Hello APi"</h1>
//    {data && data.map((res)=>(<h1>{res.name}</h1>) ) }
//   </>)


// }
// export default App


// =-=-==-=-=-==--=-==-=-===-= ========================github API Programme =-==========-=-=-=-=-=-=-=-=-=-=-=-




import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "./componets/Navbar";
import "./index.css";

function App() {
  const users = useRef();
  const [userName, setuserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  async function apiData(userValue) {
    if (!userValue) {
      alert("Invalid userName");
      return;
    }
    setloading(true);
    setError(false);
    try {
        let response = await axios.get(`https://api.github.com/users/${userValue}`);
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
      setError(true);
      setUserData(null);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    if (userName) {
      apiData(userName);
    }
    
  }, [userName]);

  const getUserData = (e) => {
    e.preventDefault();
    setuserName(users.current.value);
     users.current.value = ""
  };
  return (
    <>
    <Navbar/>


    <div style={{ textAlign: "center",  marginTop:'50px',  fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#007bff",  padding:'20px'}}>GitHub User Search</h1>
      <form
        onSubmit={getUserData}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}>
        <input
          type="text"
          ref={users}
          placeholder="Enter GitHub Username"
          style={{
            padding: "20px",
            paddingLeft:'10px',
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "350px",
            fontSize: "16px",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Search
        </button>
      </form>

      {loading && <h1 style={{ color: "blue" }}>Loading...</h1>}
      {error && <h1 style={{ color: "red" }}>User not found</h1>}

      {userData && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            margin: "0 auto",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
          <h2>{userData.name || "No Name Provided"}</h2>
          <p>{userData.bio || "No Bio Available"}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              fontSize: "16px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            <span>👥 Followers: {userData.followers}</span>
            <span>🚀 Following: {userData.following}</span>
          </div>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            View Profile
          </a>
        </div>
      )}
    </div>
    </>
  );
  
}

export default App;
