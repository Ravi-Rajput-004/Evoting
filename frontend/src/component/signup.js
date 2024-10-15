import React, { useState } from 'react'

const Signup = () => {
    const[pname,setpname]=useState();
    const[email,setemail]=useState();
    const[pass,setpass]=useState();
    const[cpass,setcpass]=useState();


const signup=async()=>{
    const data={pname,email,pass,usertype:"normal"}
    if(pass===cpass){
        try{
            const res=await fetch(`${process.env.REACT_APP_APIURL}register`,
                {
                    method:"post",
                    body: JSON.stringify(data),
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            )
            if(res.ok)
                {
                    const result=await res.json()
                    if(result.statuscode===1)
                    {
                        alert("account is created")
                    }

            }
        }
        catch(error){
            alert(error.message)
        }
    }
    else{
        alert("password and confrim passsword do not match")
    }
}



  return (
    <div>
        
        <input type='text' onChange={(e)=>setpname(e.target.value)} placeholder='enter your name'/><br /><br />
        <input type='email' onChange={(e)=>setemail(e.target.value)}  placeholder='enter your email'/><br /><br />
        <input type='password' onChange={(e)=>setpass(e.target.value)}  placeholder='enter your password'/><br /><br />
        <input type='password' onChange={(e)=>setcpass(e.target.value)}  placeholder='confrim password'/><br /><br />
        <button onClick={signup}>Submit</button>
      
    </div>
  )
}

export default Signup;
