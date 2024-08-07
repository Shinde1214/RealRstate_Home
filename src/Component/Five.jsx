import React from 'react'
import Blog from '../assets/Blog.jpeg'
import Blogs from '../assets/Blogs.jpeg'
import Blogss from '../assets/Blogss.jpeg'
import Arrow from '../assets/Arrow.jpeg'
import Arrows from '../assets/Arrows.jpeg'
import Kirti from '../assets/Kirti.jpeg'
import Agarwal from '../assets/Agarwal.jpeg'


const Five = () => {
  return (
    <>
            <section style={{ backgroundColor: 'lightgrey', height: '650px', marginTop: '710px', width: '1520px', marginLeft: '-150px' }}>
                <div style={{ color: 'red', textAlign: 'center', marginBottom: '-50px', padding: '30px' }}>
                    <h6>OUR BLOG AND ARTICLES</h6>
                    <h3 style={{ color: 'black', padding: '0px', marginTop: '30px' }}>What Our Client Says</h3>
                </div>
                <div className='col-md-12 col-sm-12 d-flex align-items-center'>
                    <div className='container mt-5' >
                        <div className='row d-flex'>
                            <div className='col-md-6 '>
                                <div className='left text-black' style={{ padding: '40px' }}>
                                    <div className='rigth' style={{ backgroundColor: 'white', width: '570px', height: '350px', borderRadius: '30px', marginLeft: '20px' }} >
                                        <div>
                                            <img src={Kirti} className='img-thumbnail' alt='img' style={{ height: '120px', width: '120px', marginRight: '390px', marginTop: '20px', borderRadius: '20px' }} />
                                            <div>
                                                <h4 style={{ marginRight: '80px', marginTop: '-100px' }}>Kirti Agarwal</h4>
                                                <div>
                                                    <h6 style={{ marginRight: '90px', marginTop: '10px' }}>Project manager</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='mt-2 1h-1.5' style={{ marginLeft: '-20px', marginBottom: '60px', padding: '40px' }}> I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision..</p>
                                                <div className='right' style={{ justifyContent: 'space-evenly', position: 'relative', marginRight: '320px', color: '#FF7D33', marginTop: '-80px',display:'flex' }}>
                                                    <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><span style={{ color: 'black' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 d-flex align-items-center '>
                                <div className='left text-black' style={{ padding: '40px' }}>
                                    <div className='rigth' style={{ backgroundColor: 'white', width: '570px', height: '350px', borderRadius: '30px', marginTop: '0px', marginLeft: '-30px' }} >
                                        <div>
                                            <img src={Agarwal} className='img-thumbnail' alt='img' style={{ height: '120px', width: '120px', marginRight: '390px', marginTop: '20px', borderRadius: '20px' }} />
                                            <div>
                                                <h4 style={{ marginRight: '80px', marginTop: '-100px' }}>Kirti Agarwal</h4>
                                                <div>
                                                    <h6 style={{ marginRight: '90px', marginTop: '10px' }}>Project manager</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='mt-2 1h-1.5' style={{ marginLeft: '-20px', marginBottom: '60px', padding: '40px' }}> My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.</p>
                                                <div className='right' style={{ justifyContent: 'space-evenly', position: 'relative', marginRight: '320px', color: '#FF7D33', marginTop: '-80px',display:'flex' }}>
                                                    <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><span style={{ color: 'black' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <img src={Arrow} className='img-thumbnail' alt='img' style={{ height: '40px', width: '40px',borderRadius: '10px' }} />&nbsp;&nbsp;&nbsp;
                            <img src={Arrows} className='img-thumbnail' alt='img' style={{ height: '40px', width: '40px',borderRadius: '10px' }} />

                            </div>
                        </div>
                    </div>
                </div>
                 <div style={{ color: 'red', textAlign: 'center', marginTop: '120px', padding: '30px' }}>
                    <h6>OUR BLOG AND ARTICLES</h6>
                    <h3 style={{ color: 'black', padding: '0px', marginTop: '20px' }}>Latest Blog Post</h3>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-4 col-sm-6 d-flex align-items-center '>
                            <div className='left text-white'>
                                <img src={Blog} alt='img' style={{ width: '410px', height: '500px',marginLeft:'50px' }} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='rigth'>
                                <img src={Blogs} alt='img' style={{ width: '410px', height: '500px',marginLeft:'0px' }} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='rigth'>
                                <img src={Blogss} alt='img' style={{ width: '410px', height: '500px',marginLeft:'-100px' }} />
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
             </section >
    </>
  )
}

export default Five