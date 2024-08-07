import React from 'react'
// import Homes from '../assets/Homes.jpeg'
import Image from '../assets/Image.jpeg'
import RD from '../assets/RD.jpeg'
import CM from '../assets/CM.jpeg'
import EF from '../assets/EF.jpeg'
import HP from '../assets/HP.jpeg'
import LE from '../assets/LE.jpeg'
import NC from '../assets/NC.jpeg'
import TL from '../assets/TL.jpeg'
import VR from '../assets/VR.jpeg'
import White from '../assets/White.jpeg'
const Home = () => {
    return (
        <>
            <section>
                <div className='Home'>
                   
                    <img src={Image} alt='img' style={{ width: '1570px', height: '650px', marginTop: '-1000px', marginLeft: '-200px' }} />
                    <img src={White} alt='img' style={{ width: '1200px', height: '80px', marginTop: '-650px',borderRadius:'10px',marginLeft: '-50px' }} />
                    <button class="btn btn-danger shadow-none" style={{ width: '80px',marginRight:'50px',marginTop:'-920px',borderRadius:'20px' }}>Rent </button>
                    <button class="btn btn-danger shadow-none" style={{ width: '80px',marginRight:'50px',marginTop:'-920px',borderRadius:'20px',backgroundColor:'white',color:'black' }}>Buy </button>
                    <button class="btn btn-danger shadow-none" style={{ width: '80px',marginRight:'80px',marginTop:'-920px',borderRadius:'20px',backgroundColor:'white',color:'black' }}>Sell </button>
                    <h1 style={{marginTop:'-770px',color:'white',textAlign:'center'}}><b>Find &nbsp;the &nbsp;Perfect&nbsp; Place <br/>to&nbsp; Call&nbsp; Home</b></h1>
                    <p className='mt-4 1h-1.5' style={{marginTop:'00px',color:'white',textAlign:'center'}}>Explore a wide range of properties in the most desirable locations. Whether you’re <br/>looking for a cozy apartment,a spacious family home, or a luxurious estate, <br/>we have listings to suit every lifestyle and budget. </p>

                </div>
                <div className='row d-flex' style={{ marginTop: '-215px', backgroundColor: 'lightgrey', width: '1520px', marginLeft: '-150px', height: '150px',padding:'40px' }}>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>300+</h1>
                            <p><b className='mt-2 1h-1.5'>Happy Client</b></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>1K+</h1>
                            <p><b className='mt-2 1h-1.5'>Property Ready</b></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>80+</h1>
                            <p><b className='mt-2 1h-1.5'>Completed Agent</b></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>60%</h1>
                            <p><b className='mt-2 1h-1.5'>Years Growth</b></p>
                        </div>
                    </div>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-3 col-sm-6 d-flex align-items-center '>
                            <img src={RD} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px' }} />
                        </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={CM} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px'}} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={VR} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px' }} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={TL} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px' }} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-3 col-sm-6 d-flex align-items-center '>
                            <img src={NC} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px' }} />
                        </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={LE} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px'}} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={EF} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px' }} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={HP} alt='img' style={{ width: '270px', height: '120px',borderRadius:'10px' }} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='right'>
                <h6 style={{color:'red',marginTop:'100px'}}>OUR SERVICES</h6>
                </div>


            </section>
        </>
    )
}

export default Home