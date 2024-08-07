import React from 'react'
import One from '../assets/One.jpeg'
import Two from '../assets/Two.jpeg'
import Three from '../assets/Three.jpeg'
import Four from '../assets/Four.jpeg'
import Five from '../assets/Five.jpeg'
import Six from '../assets/Six.jpeg'
import Seven from '../assets/Seven.jpeg'
import Eight from '../assets/Eight.jpeg'
import Nine from '../assets/Nine.jpeg'

const Service = () => {
  return (
    <>
      <section >
        <h3 style={{ textAlign: 'center', padding: '20px' }}>Recommended For You</h3>
        <div className='centre' style={{ justifyContent: 'space-evenly' }}>
          <button class="btn btn-danger shadow-none" style={{ width: '100px', borderRadius: '10px' }}>View all</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-dark shadow-none" style={{ backgroundColor: 'lightgrey', width: '100px', borderRadius: '10px', color: 'black' }}>Apartment</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-dark shadow-none" style={{ backgroundColor: 'lightgrey', width: '100px', borderRadius: '10px', color: 'black' }}>Villa</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-dark shadow-none" style={{ backgroundColor: 'lightgrey', width: '100px', borderRadius: '10px', color: 'black' }}>Studio</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-dark shadow-none" style={{ backgroundColor: 'lightgrey', width: '100px', borderRadius: '10px', color: 'black' }}>Home</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-dark shadow-none" style={{ backgroundColor: 'lightgrey', width: '100px', borderRadius: '10px', color: 'black' }}>Office</button>&nbsp;&nbsp;&nbsp;
        </div>
        <div className='container mt-5' >
          <div className='row d-flex'>
            <div className='col-md-4 col-sm-6 d-flex align-items-center '>
              <div className='left text-white'>
                <img src={One}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rigth'>
                <img src={Two} alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rigth'>
                <img src={Three}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-5' >
          <div className='row d-flex'>
            <div className='col-md-4 col-sm-6 d-flex align-items-center '>
              <div className='left text-white'>
                <img src={Four}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rigth'>
                <img src={Five}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rigth'>
                <img src={Six}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-5' >
          <div className='row d-flex'>
            <div className='col-md-4 col-sm-6 d-flex align-items-center '>
              <div className='left text-white'>
                <img src={Seven}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rigth'>
                <img src={Eight}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='rigth'>
                <img src={Nine}  alt='img' style={{ width: '400px', height: '500px' }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop:'30px'}}>
        <button class="btn btn-danger shadow-none" style={{ width: '200px',marginRight:'0px',borderRadius:'10px' }}>View all Property</button>
        </div>

      </section>
    </>
  )
}

export default Service