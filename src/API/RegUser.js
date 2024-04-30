import axios from "axios"

export default class UserReg{
    static async Reg(data) {
        try{
            const res = await axios.post("http://localhost:5000/api/registration",{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
    static async LogIn(data) {
        try{
            const res = await axios.post("http://localhost:5000/api/login",{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
    static async LogOut(data) {
        try{
            const res = await axios.post("http://localhost:5000/api/logout",{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
    static async ChangeLogin(data) {
        try{
            const res = await axios.put("http://localhost:5000/api/user/login" + localStorage.getItem("id"),{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
    static async ChangeSkin(data) {
        try{
            const res = await axios.put("http://localhost:5000/api/user/skin" + localStorage.getItem("id"),{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
    static async CreateGame(data) {
        try{
            const res = await axios.post("http://localhost:5000/api/create",{...data})
            return res.data
        }catch(error){ console.log(error) }
        
    }
    static async GamesList() {
        try{
            const res = await axios.get("http://localhost:5000/api/game")
            return res.data
        }catch(error){ console.log(error) }
        
    }
}
