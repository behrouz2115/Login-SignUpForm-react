export const validate =(data,type) =>{
    const errors={};
   
    if (!data.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="Email address is invalid"
    }else{
        delete errors.email
    }
    if (!data.password){
        errors.password="Password is required"
    }else if (data.password.length<5){
        errors.password="Password need to be 6 charecter"
    }else{
        delete errors.password
    }
  
    if (type === "signup"){
        if(!data.name.trim()){
            errors.name="Username is required"
        }else{
            delete errors.name
        }
        if (data.isAccepted){
            delete data.isAccepted
        }else{
            errors.isAccepted="Accept our requlation"
        }
        if (!data.confirmPassword){
            errors.confirmPassword="Confirm the Password"
        }else if (data.confirmPassword!==data.password){
            errors.confirmPassword="Password do not match"
        }else{
            delete errors.confirmPassword
        }
    }
    return errors;

}