import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target
	setData({
		...data,
		[name]: value
	})
	// console.log(data)
  }
  const handleSubmit = async (e) =>{
	e.preventDefault()
	try {
		const response = await axios.post("https://react30.onrender.com/api/user/login", data)
		if(response.status ===200){
			navigate("/")
		}else{
			alert("Login failed. Please try again.")
			navigate("/login")
		}
	} catch (error) {
		alert(error?.response?.data?.message || "An error occurred during login. Please try again.")
		navigate("/login")
	}
   console.log("submission triggered")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login to continue..</h1>
            </div>
            <form onSubmit={handleSubmit}>
				<div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                  <label
                    for="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
			<Link to="/register" className="text-blue-500 hover:text-blue-700">Don't have an account? Register here.</Link>
			</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
