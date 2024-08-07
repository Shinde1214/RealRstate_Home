import React from 'react'
import Buy from '../assets/Buy.jpeg'
import Sale from '../assets/Sale.jpeg'
import Rent from '../assets/Rent.jpeg'
import Dharashiv from '../assets/Dharashiv.jpeg'
import Thane from '../assets/Thane.jpeg'
import Mumbai from '../assets/Mumbai.jpeg'
import Pune from '../assets/Pune.jpeg'
import Nashik from '../assets/Nashik.jpeg'

const Fourth = () => {
  return (
    <>
      <section style={{ backgroundColor: 'lightgrey', height: '650px', marginTop: '100px', width: '1520px', marginLeft: '-150px' }}>
        <div style={{ color: 'red', textAlign: 'center', marginBottom: '-50px',padding:'30px' }}>
          <h6>OUR SERVICES</h6>
          <h3 style={{ color: 'black', padding: '20px' }}>What We Do ?</h3>
        </div>
        <div className='container mt-5' style={{marginTop:'0px'}}>
          <div className='row d-flex'>
            <div className='col-md-4 col-sm-6 d-flex align-items-center' style={{ width: '370px', height: '400px',borderRadius:'10px',border: '2px solid rgb(238, 234, 234)',backgroundColor: ' white',marginLeft:'70px',justifyContent:'space-evenly' }} >
              <div className='right' style={{textAlign:'center'}}>
                <div>
                <img src={Buy}  alt='img' style={{ width: '100px', height: '100px',borderRadius:'10px',marginTop:'-40px'}} />
                <h6><b style={{marginBottom:'0px'}}>Buy A New Home</b></h6>
                <p className='mt-2 1h-1.5' style={{marginTop:'0px',padding:'20px'}}>Discover your dream home effortlessly.<br/> Explore diverse properties and<br/> expert guidance for a seamless<br/> buying experience.</p>
                <button class="btn btn-danger shadow-none" style={{ width: '200px',marginRight:'0px',borderRadius:'10px' }}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 d-flex align-items-center' style={{ width: '370px', height: '400px',borderRadius:'10px',border: '2px solid rgb(238, 234, 234)',backgroundColor: ' white',marginLeft:'30px',justifyContent:'space-evenly' }}>
              <div className='rigth'  style={{textAlign:'center'}}>
                <div>
                <img src={Rent}  alt='img' style={{ width: '100px', height: '100px',borderRadius:'10px',marginTop:'-40px' }} />
                <h6><b style={{marginBottom:'0px'}}>Rent A Home</b></h6>
                <p className='mt-4 1h-1.5'>Discover your perfect rental effortlessly.<br/> Explore a diverse variety of listings <br/>tailoredprecisely to suit your unique<br/> lifestyle needs.</p>
                <button class="btn btn-danger shadow-none" style={{ width: '200px',marginTop:'10px',borderRadius:'10px' }}>Learn More</button>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 d-flex align-items-center' style={{ width: '370px', height: '400px',borderRadius:'10px',border: '2px solid rgb(238, 234, 234)',backgroundColor: ' white',marginLeft:'30px',justifyContent:'space-evenly' }}>
              <div className='rigth'  style={{textAlign:'center'}}>
                <div>
                <img src={Sale}  alt='img' style={{ width: '100px', height: '100px',borderRadius:'10px',marginTop:'-40px' }} />
                <h6><b>Sell A Home</b></h6>
                <p className='mt-4 1h-1.5'>Sell confidently with expert guidance <br/>and effective strategies, showcasing<br/> your property's best features<br/> for a successful sale.</p>
                <button class="btn btn-danger shadow-none" style={{ width: '200px',marginTop:'10px',borderRadius:'10px' }}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{textAlign:'center',marginTop:'120px'}}>
        <h6 style={{color:'red'}}>EXPLORE CITIES</h6>
        <h3 style={{ textAlign: 'center', padding: '20px' }}>Our Location For You</h3>
        </div>
        <div className='container mt-5' >
          <div className='row d-flex' style={{display:'flex',justifyContent:'space-evenly'}}>
            <div className='col-md-1 col-sm-6 d-flex align-items-center'>
              <div className='left text-white'>
                <img src={Dharashiv}  alt='img' style={{ width: '220px', height: '450px',marginLeft:'-190px' }} />
              </div>
            </div>
            <div className='col-md-2'>
              <div className='rigth'>
                <img src={Pune} alt='img' style={{ width: '320px', height: '450px',marginLeft:'-100px' }} />
              </div>
            </div>
            <div className='col-md-2'>
              <div className='rigth'>
                <img src={Mumbai} alt='img' style={{ width: '320px', height: '450px',marginLeft:'-20px' }} />
              </div>
            </div>
            <div className='col-md-2'>
              <div className='rigth'>
                <img src={Thane} alt='img' style={{ width: '320px', height: '450px',marginLeft:'60px' }} />
              </div>
            </div>
            <div className='col-md-2'>
              <div className='rigth'>
                <img src={Nashik}  alt='img' style={{ width: '220px', height: '450px',marginRight:'-310px' }} />
              </div>
            </div>
          </div><br/><br/><br/><br/>
        </div>
      </section>
    </>
  )
}

export default Fourth