import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Providers/AuthProviders';

const SignUp = () => {

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const {createUser,updateUserProfile, googleSignIn} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm()
    
      const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
          const createUser = result.user;
          setError('');
          console.log(createUser);
          toast("User Register Successfully!");
          reset();
          navigate('/');
          updateUserProfile(data.name, data.photoURL)
          .then(result = () => {
            const updateUserprofile = result.user;
            console.log(updateUserprofile)
          })
        })
        .catch((error) => {
          setError(error.message);
          setSuccess("");
        });
      } 

      const handleGoogleSignIn = () => {
        googleSignIn()
          .then((result) => {
            const signInUser = result.user;
            console.log(signInUser);
            setSuccess("User sign in by google successfully");
            setError("");
            navigate('/');
          })
          .catch((error) => {
            setError(error.message);
            setSuccess("");
          });
      };
      
      
  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg py-24">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-12 md:gap-20">
        <div className="text-center lg:text-left">
          <img style={{height: "500px"}} className='rounded-lg' src='https://i.postimg.cc/jCYwg2tj/6300959.jpg' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                name='email'
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
            
                type="password"
                name='password'
                {...register("password", { required: true,
                   maxLength: 20,
                    minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password?.type === 'required' && <p className='text-red-600' role="alert">password is required</p>}
              {errors.password?.type === "minLength" && <p className='text-red-600' role="alert">Password must be 6 characters</p>}
              {errors.password?.type === "pattern" && <p className='text-red-600' role="alert">password have one upper case, one lower case, one digit and one special characters</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name='photoURL'
                {...register("photoURL", { required: true })}
                placeholder="photoURL"
                className="input input-bordered"
              />
              {errors.photoURL && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control mt-6">
            <input className="btn btn-warning text-white" type="submit" value="signUp" />
            <button onClick={handleGoogleSignIn} className='mt-3 btn btn-outline btn-warning text-white'><FaGoogle></FaGoogle>LogIn By Google</button>
            </div>
            <p className='text-center'>Already have an acount?<Link to='/login' className='text-orange-400 font-bold'> Please Login</Link></p>
            <p className="font-bold text-enter text-rose-500"><small>{error}</small></p>
            <p className="font-bold text-enter text-teal-300"><small>{success}</small></p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
