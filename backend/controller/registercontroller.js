const registermodel=require('../models/registermodel')

exports.register = async (req, res) => {
    try {
      console.log('Request Body:', req.body); // Check what is being received
      const { pname, email, pass, usertype } = req.body;
  
      if (!pname || !email || !pass || !usertype) {
        return res.status(400).json({ msg: 'All fields are required' });
      }
  
      const registerdata = new registermodel({
        pname,
        email,
        pass,
        usertype,
      });
  
      const registerresult = await registerdata.save();
      console.log(registerresult);
  
      res.send({ statuscode: registerresult ? 1 : 0 });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  
  //login 




  exports.login = async (req,res)=>{
    try{
      const{email,password}=req.body
      const data = await registermodel.findOne({email})

      console.log(data)
      const pass=data.pass
      if(password===pass)
      {
        res.send({statuscode:1})
      }
      else{
        res.send({statuscode:0})
      }

    }
    catch(error)
    {
      console.log(error.message)
    }
  }