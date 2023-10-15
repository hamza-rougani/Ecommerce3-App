import React from 'react'
import Header from "../home/Header"
function Register() {
  return (
    <div className='Register'>
      <Header/>
      <div className='Reg'>
        <div className='R'>
            <div className='head'>
                <div className='im'> <img src="h.png" alt="" /></div>
           
            <h1>Estevanico</h1>
            </div>
        
            <div className='t'>
                <button id='Reg'>Register</button>
                <button id='Lo'>Login</button>
            </div>
            <form action="">
                <div className='i'>

                    <input type="text" placeholder='Name' />
                </div>
                <div className='i'>

                    <input type="text" placeholder='Email'/>
                </div>
                <div className='i'>
                    <input type="text" placeholder='Password'/>
                </div>
                <div className='i'>
                   <button id="conf">Confirmer</button>
                </div>
                <div className='i line'>
                    <div className='media'>
                        <div className='img'><img src="facebook.png" alt="" /></div>
                        <div className='img'><img src="instagram.png" alt="" /></div>
                        <div className='img'><img src="twitter.png" alt="" /></div>
                        <div className='img'><img src="chercher.png" alt="" /></div>
                    </div>
                    <div className='roles'>
                    En créant un compte Estevanico, vous acceptez Contrat d'adhésion gratuite à<a href="">Estevanico.com et la Politique</a>  de confidentialité
                    </div>
                </div>

                
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
