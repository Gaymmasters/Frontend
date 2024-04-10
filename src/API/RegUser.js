import axios from "axios"

export default class UserReg{
    static async RegistrationUser(data) {
        try{
            const res = await axios.post("http://localhost:5000/api/registration",{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
}