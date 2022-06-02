export const validate =data =>{
    const errors={};
    if(!data.name.trim()){
        errors.name="Username required"
    }else{
        delete errors.name
    }
    if (!data.email){
        errors.email="Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors
    }

}