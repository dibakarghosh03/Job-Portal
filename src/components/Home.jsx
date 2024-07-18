import {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible  } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiMoney } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { BsCardChecklist } from "react-icons/bs";
import { CiLogin, CiSearch } from "react-icons/ci";
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className='mx-auto w-10/12'>
        <section className='my-14'>
          <h1 className='text-center text-[#00a264] text-5xl font-semibold'>Your work people are here</h1>
        </section>
        <div className='flex justify-between mx-auto'>
          <img src={img1} alt="" className='max-h-[330px]' />
          <div className='w-10/12 px-10'>
            <p className='text-center text-xl'>Login to your account</p>
            <form onSubmit={handleSubmit} className='w-full mt-6'>
              <label >
                <p>Email<span className='text-red-500'>*</span></p>
                <input 
                  type="text" 
                  name='email' 
                  placeholder='Enter email address' 
                  value={formData.email}
                  onChange={handleOnChange}
                  className='border-2 rounded-md w-full border-gray-400 p-2 mb-2 ' 
                />
              </label>
              <label className='relative'>
                <p>Password<span className='text-red-500'>*</span></p>
                <input 
                  type={showPassword ? "text" : "password"}
                  name='password' 
                  value={formData.password}
                  onChange={handleOnChange}
                  placeholder='Enter password' 
                  className='border-2 rounded-md border-gray-400 p-2 mb-2 w-full' 
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 translate-y-4 z-[10] cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>
                <div className='w-full relative'>
                  <Link to='/forgot-password' className='text-[#00a264] absolute right-0 top-0 text-sm'>
                    Forgot password
                  </Link>
                </div>
              </label>
              <button type='submit' className='w-full flex justify-center items-center gap-x-1 py-3 mt-12 rounded-md bg-black text-white text-center text-[18px] hover:bg-[#00a264] transition-all duration-300'>Login <CiLogin/></button>
            </form>
          </div>
          <img src={img2} alt="" className='max-h-[330px]' />
        </div>
      </div>
      <div className='w-screen my-16 border-b border-gray-400'></div>
      <div className='flex flex-col items-center border-b border-gray-400'>
        <div className='max-w-[500px] mb-6'>
          <p className='text-center text-3xl font-semibold'>Get ahead with JobPro</p>
          <p className='text-center my-4'>
            We're serving up trusted insights and anonymous conversation, so you'll have the 
            goods you need to succeed.
          </p>
        </div>
        <div className='w-10/12 flex justify-around mb-10'>
          <div className='flex flex-col gap-y-4 items-center justify-center'>
            <TiMessages size={50} />
            <p>Join your work community</p>
          </div>
          <div className='flex flex-col gap-y-4 items-center justify-center'>
            <BsCardChecklist size={50} />
            <p>Find and apply to jobs</p>
          </div>
          <div className='flex flex-col gap-y-4 items-center justify-center'>
            <HiOutlineBuildingOffice2 size={50} />
            <p>Company reviews</p>
          </div>
          <div className='flex flex-col gap-y-4 items-center justify-center'>
            <PiMoney size={50} />
            <p>Compare salaries</p>
          </div>
        </div>
      </div>
      <div className='py-10 bg-[#F5F6F7] border-b border-gray-400'>
        <p className='text-center text-3xl font-semibold'>Shape your career</p>
        <p className='text-xl text-center text-gray-600 my-4'>Need some inspiration? See what millions of people are looking for on JobPro today.</p>
        <button onClick={() => {navigate('/posts')}} className='w-[250px] mx-auto flex justify-center items-center gap-x-2 py-3 mt-8 rounded-md bg-black text-white text-center text-[18px] hover:bg-[#00a264] transition-all duration-300'>
            Find Jobs <CiSearch/>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Home
