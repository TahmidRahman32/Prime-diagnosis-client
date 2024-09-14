import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { City, Country, State } from "country-state-city";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";

import Selector from "./Selector";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_APIKEY;
const img_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const Register = () => {
   const [showPass, setShowPass] = useState(false);
   const { createUser } = useAuth();
   const axiosPublic = useAxiosPublic();
   const navigate = useNavigate();
   let countryData = Country.getAllCountries();
   const [country, setCountry] = useState(countryData[18]);
   const [stateData, setStateData] = useState([]);
   const [cityData, setCityData] = useState([]);
   const [state, setState] = useState();
   const [city, setCity] = useState();

   // console.log(country);
   const { register, handleSubmit } = useForm();
   const onSubmit = async (data) => {
      console.log(data);
      const imgFile = { image: data.image[0] };

      const res = await axiosPublic.post(img_api, imgFile, {
         headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
      }
      const usersInformation = {
         email: data.email,
         name: data.name,
         image: res.data.data.display_url,
         blood: data.blood,
      };
      console.log(usersInformation);

      // createUser(data.email, data.password)
      //    .then((result) => {
      //       console.log(result.user);
      //       axiosPublic.post("/users", usersInformation).then((res) => {
      //          console.log(res.data);
      //       });

      //       updateProfile(result.user, {
      //          displayName: data.name,
      //          photoURL: res.data.data.display_url,
      //       });
      //       navigate("/");
      //    })
      //    .catch(() => {});
   };

   useEffect(() => {
      setStateData(State.getStatesOfCountry(country?.isoCode));
   }, [country]);
   useEffect(() => {
      setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
   }, [state]);
   useEffect(() => {
      stateData && setState(stateData[0]);
   }, [stateData]);
   useEffect(() => {
      cityData && setCity(cityData[0]);
   }, [cityData]);

   //    if (password.length < 6) {
   //       toast.error("Password must be 6 Character");
   //       return;
   //    } else if (!/[A-Z]/.test(password)) {
   //       toast.error("Please Add Minimum one Uppercase");
   //       return;
   //    } else if (!/[a-z]/.test(password)) {
   //       toast.error("Please Add Minimum one lowercase");
   //       return;
   //    }

   return (
      <div>
         <Helmet>
            <title>Register</title>
         </Helmet>

         <div>
            <Helmet>
               <title> Register</title>
            </Helmet>
            <div className="hero bg-loginImg bg-center min-h-[calc(100vh-133px)]">
               <div className="bg-[#43b27f] bg-opacity-40 rounded-xl mx-auto animate__animated animate__backInDown animate__slow">
                  <div className="text-center lg:text-left "></div>

                  <div className="flex justify-center my-2 mx-4 md:mx-0">
                     <div className=" w-[650px]">
                        <div className="text-center">
                           <div className="flex items-center justify-center"></div>
                           <h2 className="text-4xl tracking-tight font-bold font-pansy text-white">Sign Up your account</h2>
                           <span className="text-lg">
                              or{" "}
                              <Link to={"/login"} className="text-blue-400">
                                 You have an already account
                              </Link>
                           </span>
                        </div>
                        <div className="flex mx-auto my-8 flex-wrap w-96 mb-6">
                           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-full px-3 ">
                                 <div className="form-control">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">Name</span>
                                    </label>
                                    <input
                                       type="text"
                                       {...register("name", { required: true })}
                                       name="name"
                                       placeholder="Full Name"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                 </div>

                                 <div className="form-control">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">Email</span>
                                    </label>
                                    <input
                                       type="email"
                                       {...register("email", { required: true })}
                                       name="email"
                                       placeholder="email"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                 </div>
                                 <div className="form-control">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">Photo</span>
                                    </label>
                                    <input
                                       type="file"
                                       {...register("image", { required: true })}
                                       name="image"
                                       placeholder="email"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                 </div>
                                 <div className="my-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">blood group</span>
                                    </label>

                                    <select className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300" {...register("blood", { required: true })}>
                                       <option value="">Select Blood...</option>
                                       <option value="A+">A+</option>
                                       <option value="A-">A-</option>
                                       <option value="O+">O+</option>
                                       <option value="O-">O-</option>
                                       <option value="AB-">AB-</option>
                                       <option value="AB+">AB+</option>
                                       <option value="B+">B+</option>
                                       <option value="B-">B-</option>
                                    </select>
                                 </div>
                                 <div className="my-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">country</span>
                                    </label>

                                    <Selector data={countryData} selected={country} setSelected={setCountry} required name="country"></Selector>
                                 </div>
                                 <div className="my-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">state</span>
                                    </label>

                                    <Selector data={stateData} selected={state} setSelected={setState}></Selector>
                                 </div>
                                 {city && (
                                    <div className="my-2">
                                       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                          <span className="label-text text-white">City</span>
                                       </label>

                                       <Selector data={cityData} selected={city} setSelected={setCity}></Selector>
                                    </div>
                                 )}
                              </div>
                              <div className="w-full md:w-full px-3 mb-6">
                                 <div className="form-control relative">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                       <span className="label-text text-white">Password</span>
                                    </label>
                                    <input
                                       type={showPass ? "text" : "password"}
                                       name="password"
                                       {...register("password", { required: true })}
                                       placeholder="Password"
                                       className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                       required
                                    />
                                    <span onClick={() => setShowPass(!showPass)} className="absolute right-4 bottom-3">
                                       {showPass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
                                    </span>
                                 </div>
                              </div>
                              <div className="text-center md:w-full px-3 mb-6">
                                 <button className="relative flex w-full h-[50px] mx-auto items-center justify-center overflow-hidden bg-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-full rounded-lg">
                                    <span className="relative z-10 font-pansy text-xl">LogIn</span>
                                 </button>
                              </div>
                           </form>
                           <div className="mx-auto -mb-6 pb-1">
                              <span className="text-center text-xs text-gray-400">or sign up with</span>
                           </div>
                           {/* <div className="flex items-center w-full mt-2">
                              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                                 <button
                                    // onClick={handleFacebookLogin}
                                    className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                                 >
                                    <FaFacebookSquare size={24} color="#1579F0" />
                                 </button>
                              </div>
                              <div className="w-full md:w-1/3 px-3 pt-4 mx-2">
                                 <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                    <FcGoogle size={24} />
                                 </button>
                              </div>
                              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                                 <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                    <FaGithub size={24} />
                                 </button>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
