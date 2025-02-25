import { useSelector } from "react-redux"

const ContactPage=()=>{
    let {user}=useSelector((state)=>state.User)
    console.log(user)
    return (
        <>

        <h1>Contact US {user?.Email} </h1>
        </>
    )
}

export default ContactPage