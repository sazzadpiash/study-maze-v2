import Image from 'next/image';
import registerBanner from '../../../public/assets/registerBanner/register_banner.svg';
import google from '../../../public/assets/logo/google.png';
import { FaUser, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Styles from '../../styles/Button.module.css'
import { useState } from 'react'
import Meta from '@/components/head/meta';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
type FormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
};



const Register = () => {
    const [check, setUnCheck] = useState(false)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: any) => {
        console.log(data);
        reset()
    }

    return (
        <>
            <Meta title="register"></Meta>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-10 py-10'>
                <div className='p-5'>
                    <Image
                        src={registerBanner}
                        alt=''
                    ></Image>
                </div>
                <div className='p-5'>
                    <h1 className='text-center text-gray-700 font-bold text-xl'>Sign up with</h1>
                    <div className='flex lg:w-1/2 mx-auto justify-center my-5'>
                        <button className='flex items-center font-semibold border focus:border-secondary px-10 focus: py-1 rounded-sm text-gray-700 shadow-sm hover:bg-blue-200 hover:shadow-xl hover:translate-x-100 hover:delay-200 hover:duration-300'>
                            <Image width={35} alt='' src={google}>
                            </Image>
                            Google
                        </button>
                    </div>
                    <h1 className='text-center text-gray-700 font-bold pt-5'>Or Sign up with your email</h1>
                    <form className='pt-5 space-y-5' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col space-x-3 items-center relative justify-around'>
                            <FaUser className='absolute left-5 lg:left-14 lg:top-3 text-gray-700 w-4 h-4'></FaUser>
                            <input type="text"
                                {...register("fullName", { required: "full name is required" })}
                                className='w-full lg:w-4/5 shadow-sm px-8 py-2 rounded-sm focus:shadow-xl outline-none border focus:border-secondary' placeholder='Full Name' />
                            {errors.fullName && <small role='alert' className='text-red-600 text-sm'>{errors.fullName?.message}</small>}
                        </div>
                        <div className='flex flex-col space-x-3 items-center relative justify-around'>
                            <HiMail className='absolute left-5 lg:left-14 lg:top-3 text-gray-700 w-4 h-4'></HiMail>
                            <input type="email"
                                {...register("email", { required: "email is required" })}
                                className='w-full lg:w-4/5 shadow-sm px-8 py-2 rounded-sm focus:shadow-xl outline-none border focus:border-secondary' placeholder='Email' />
                            {errors.email && <small role='alert' className='text-red-600 text-sm'>{errors.email?.message}</small>}
                        </div>
                        <div className='flex flex-col space-x-3 items-center relative justify-around'>
                            <FaLock className='absolute left-5 lg:left-14 lg:top-3 text-gray-700 w-4 h-4'></FaLock>
                            <input type="password"
                                {...register("password",
                                    {
                                        required: "required",
                                        minLength: { value: 6, message: "your password should be at least 6 characters" }
                                    })}
                                className='w-full lg:w-4/5 shadow-sm px-8 py-2 rounded-sm focus:shadow-xl outline-none border focus:border-secondary' placeholder='Password' />
                            {errors.password && <small role='alert' className='text-red-600 text-sm'>{errors.password?.message}</small>}
                        </div>
                        <div className='text-center'>
                            <span className='text-gray-700'>
                                <input onChange={() => setUnCheck(!check)} checked={check} className='mr-4' type="checkbox" required />
                                I have read and agree to the <a href="#" className='text-blue-600'>Terms and Conditions</a> <br />   and the <a href="#" className='text-blue-600'>Privacy and Cookies Policy*</a>.
                            </span>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className={`${Styles.btnGroup}`} disabled={!check}>Create Account</button>
                        </div>
                        <div className='text-center'>
                            <span>Already have an account? <Link href="/login" className='text-blue-400'>Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;