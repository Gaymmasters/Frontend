import { Link, useNavigate } from 'react-router-dom';
import UserReg from '../../../API/RegUser';
import './menuPage.css';
import logo from "../img/logo.png"

const MenuPage = () => {
    const navigate = useNavigate();
    async function logOut(){
        const res = await UserReg.LogOut({})
        if (!res.result){
            alert('Error: ' + res.message);
        }
        else{
            localStorage.clear()
            navigate("/login");
        }
    }
let isShown = false;
function hide() {
    const Block = document.getElementById("ggg");
    if (isShown){
        Block.style.display = "none";
        isShown = false;
    }
    else{
        Block.style.display = "block";
        isShown = true;
    }
    }
    return(
        <div>
            <div className='main'>
                <div className='block-menu'>
                    <img src= {logo} alt = "logo"></img>
                    <Link to=''>
                        <button className='menu'>Find game</button>
                    </Link>
                    <Link to=''>
                        <button className='menu'>Create game</button>
                    </Link>
                    <Link to='/rules'>
                        <button className='menu'>Rules</button>
                    </Link>
                    <Link to='/settings'>
                        <button className='menu'>Settings</button>
                    </Link>
                    <button className='menu' onClick={logOut}>Log out</button>
                </div>
                <div className='block-authors'>
                    <button id='authors' onClick={hide}>Authors</button>
                </div>
            </div>
            <div className='ghost' id="ggg">
                <div className="logo">
                    <img src= {logo} alt = "logo"></img>
                </div>
                <div className='allAuthors'>
                    <div className='authors'>
                        <h3>Гришко Дмитрий Михайлович</h3>
                        <p>Самый скромный backender галактики</p> 
                        <a  href ='https://github.com/TAskMAster339'>GitHub</a> 
                        <p className='MainActors'>Так себе шутник</p>
                    </div>
                    <div className='authors'>
                        <h3>Брезгунова Анжелика Руслановна</h3>
                        <p>Создатель Skynet</p> 
                        <a  href ='https://github.com/angelika005'>GitHub</a> 
                        <p className='MainActors'>Горячая чикса</p>
                    </div>
                    <div className='authors'>
                        <h3>Заморский Павел Владимирович</h3>
                        <p>Dev of the Ops and Dungeon port</p> 
                        <a  href ='https://github.com/0pavel1'>GitHub</a>
                        <p className='MainActors'>Недопонятый гений</p> 
                    </div>
                    <div className='authors'>
                        <h3>Кропивка Виктория Валентиновна</h3>
                        <p>End of the front</p> 
                        <a  href ='https://github.com/ViktoriaKropivka'>GitHub</a> 
                        <p className='MainActors'>Пубертатная язва</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MenuPage;