import './Home.css'
import img1 from '../../assets/images/icons/1.png'
import img2 from '../../assets/images/icons/2.png'
import img3 from '../../assets/images/icons/3.png'
import img4 from '../../assets/images/icons/4.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Coffe from '../Coffe/Coffe'
import bg1 from '../../assets/images/more/1.png'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffes')
            .then(res => res.json())
            .then(d => setData(d))
    }, [])
    return (
        <>
            <div  className='banner'>
                <div className='container  '>
                    <div className=' text-white ban'>
                        <h1 className='display-5 '>Would you like a Cup of Delicious Coffee?</h1>
                        <p className="my-3">It coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn btn-danger bg-opacity-25">Lern more</button>
                    </div>
                </div>
            </div>
            <div className='s2'>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='p-4'>
                                <img src={img1} alt="" className="img-fluid" />
                                <h3 className='my-3'>Awesome Aroma</h3>
                                <p>You will definitely be a fan of the design & aroma of your coffee</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='p-4'>
                                <img src={img2} alt="" className="img-fluid" />
                                <h3 className='my-3'>Awesome Aroma</h3>
                                <p>You will definitely be a fan of the design & aroma of your coffee</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='p-4'>
                                <img src={img3} alt="" className="img-fluid" />
                                <h3 className='my-3'>Awesome Aroma</h3>
                                <p>You will definitely be a fan of the design & aroma of your coffee</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='p-4'>
                                <img src={img4} alt="" className="img-fluid" />
                                <h3 className='my-3'>Awesome Aroma</h3>
                                <p>You will definitely be a fan of the design & aroma of your coffee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-relative'>
                <div className="container">
                    <div className='text-center mb-4'>
                        <p className='text-center mt-5 mb-1'>--- Sip & Savor ---</p>
                        <h2 className='text-center fw-bolder'>Our Popular Products</h2>
                        <Link to="/add_coffe"><button className="btn addcoffe ">add coffe</button></Link>
                    </div>
                    <div className="row g-3 ">
                        {data.map(d => <Coffe key={d._id} data={data} setData={setData} d={d}></Coffe>)}
                    </div>
                </div>
                <img src={bg1} alt="" className="img-fluid position-absolute top-0 z-n1" />
            </div>
        </>
    );
};

export default Home;