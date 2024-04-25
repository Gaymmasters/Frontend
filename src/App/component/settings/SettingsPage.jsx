import React, { useState } from "react";
import classes from "./settings.module.css";
import { Link } from "react-router-dom";
import { moveToLocalStore } from "../../../features/store";
import UserReg from "../../../API/RegUser";


const SettingsPage = () => {
    const [newInf, setNewInf] = useState();
    async function ChangeInf(){
        const res = await UserReg.ChangeInf(newInf);
        if (!res.result){
            alert("Error: " + res.result);
        }
        else{
            moveToLocalStore({...res});
        }
     } 

    return(
        <div className={classes.settingsContainer}>
            <h1>Settings</h1>
            <div className={classes.names}>
                <label>Name</label>
                <input
                type = "text"
                className={classes.inpName}
                placeholder={localStorage.getItem("login")}
                onChange={e => setNewInf({...newInf, login: e.target.value})}/> 
                <button className={classes.btnChange} onClick={ChangeInf}>Change</button>
            </div>
            <div className={classes.skins}>
                <div className={classes.skin} id="skin-0"></div>
                <div className={classes.skin} id="skin-1"></div>
                <div className={classes.skin} id="skin-2"></div>
                <div className={classes.skin} id="skin-3"></div>
                <div className={classes.skin} id="skin-4"></div>
                <div className={classes.skin} id="skin-5"></div>
                <button className={classes.btnChange}>Change</button>
            </div>
            <Link to="/">
                <button className={classes.bthBack} onClick={ChangeInf}>Back</button>
            </Link>
        </div>
    )
}

export default SettingsPage;