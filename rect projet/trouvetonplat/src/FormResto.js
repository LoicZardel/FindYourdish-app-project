import React from 'react';
import respo from './respo.jpg'
import dishlogo from './dishlogo.png';
import './Formresto.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function FormResto() {
  return (
    <div>
                {/* partie gauche page itinéraire*/}
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        {/* partie gauche: texte + image en pixel*/}
                        <div className='col-md-6'>
                            <div className='cf'>                    
                                    <div className='headform'>
                                        <div  className='bg-dark mb-4 '><div className='mt-0'><img src={dishlogo} alt='logo' style={{width:50}} className='mx-auto d-block mb-3'></img></div></div>
                                        <form>
                                            <input type='text' placeholder='nom' required></input>
                                            <input type='mail' placeholder='email' required></input>
                                            <input type='number' placeholder='quantité' required className='mb-5'></input>
                                            <button type='submit' className='mb-5'>OK</button>
                                        </form>
                                    </div>
                            </div>

                        </div>
                        {/* partie droite: texte + image en pixel*/}
                        <div className='col-md-6'>
                            <div className='c1'>
                               
                                <div id='gps' alt=''  >
                                    <img src={respo} className='mt-3  mx-auto d-block' alt='' style={{width:500}} ></img>
                                   

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
    </div>
  );
}

export default FormResto;