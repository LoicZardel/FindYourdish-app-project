// src/Sidebar.js

import './Sidebar.css';
import gourmet from './gourmet.jpg'
import { IoHome } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
function SideBarMenu() {
    

    return (
        <div>
                    
                    
                    <div className='sidebar'>
                        <div className='proprio'>
                            <img src={gourmet} alt='' style={{width:150,borderRadius:100}} className='mt-3'></img><br></br>
                            <p style={{fontWeight:'bold',fontSize:20}}>Stella Gourmet</p><br></br>

                        </div >
                           

                            <div className='menu'>
                                <ul>
                                    <li><span><IoHome /></span><span>.</span>  Listes Des Clients</li>
                                    <li><span><LuClipboardList /></span><span>.</span>Listes des Plat</li>
                                    <li><span><IoMdNotificationsOutline /></span><span>.</span>Commande en Cour</li>
                                    <li><span><GoChecklist /></span><span>.</span>Commande Effectué</li>
                                    
                                </ul>
                            </div>
                        
                    </div>
        </div>
        
    );
};

export default SideBarMenu;