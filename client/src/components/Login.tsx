import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust according to your store setup
import { loginAsync, signupAsync } from '../redux/authSlice';
import { AppDispatch } from '../redux/store'; // Import AppDispatch type if required
import { useNavigate } from 'react-router-dom';



// interface LoginProps {
//   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit =async (event: React.FormEvent) => {
    event.preventDefault();

    const credentials = { email, password };
    
    try {
      if (isSignup) {
         await dispatch(signupAsync(credentials)).unwrap();
        // localStorage.setItem('token', response.token);
        // setIsAuthenticated(true);
      } else {
        const response = await dispatch(loginAsync(credentials)).unwrap();
        localStorage.setItem('token', response.token);
        // setIsAuthenticated(true);
        navigate('/');
      }
      // Redirect to home after login/signup
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <main className="flex overflow-hidden flex-col bg-purple-900">
      <div className="flex relative flex-col w-full min-h-[1024px] max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/418616db3eb8ee00f76e6d838d5aa439fb9813015b6799f3a7e4a5439c2e22d1?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef" 
          alt="" 
          className="object-cover absolute inset-0 size-full" 
        />
        <div className="relative pt-36 pb-20 pl-20 w-full bg-purple-900 bg-opacity-20 max-md:pt-24 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <form onSubmit={handleSubmit} className="flex relative flex-col grow py-24 w-full bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-14 w-full text-xl text-zinc-500 max-md:px-5 max-md:max-w-full">
                  <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce1529effe5d03a0229e9bd9d2268c134cfef430fae3727ec5231f0776fa1b4?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef" 
                    alt="Digitalflake logo" 
                    className="object-contain self-center max-w-full aspect-[1.92] w-[238px]" 
                  />
                  <h1 className="self-center text-2xl">
                    {isSignup ? 'Create an Account' : 'Welcome to Digitalflake Admin'}
                  </h1>

                  <div className="flex flex-col items-start px-5 pb-9 mt-20 w-full whitespace-nowrap rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                    <label htmlFor="email" className="z-10 gap-2.5 self-stretch px-2 py-1 mt-0 bg-white">
                      Email-id
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-none outline-none"
                      aria-label="Email-id"
                      required
                    />
                  </div>

                  <div className="flex flex-col items-start px-5 pb-5 mt-11 w-full whitespace-nowrap rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                    <label htmlFor="password" className="z-10 gap-2.5 self-stretch px-2 py-1 mt-0 bg-white">
                      Password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-none outline-none"
                      aria-label="Password"
                      required
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="self-end mt-2">
                      <img 
                        loading="lazy" 
                        src={showPassword ? 
                          "https://cdn.builder.io/api/v1/image/assets/TEMP/eede966abdfa6a81623b2075f6f4f5722857c39524ce817d3fa4f5403463282b?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef" 
                          : 
                          "https://cdn.builder.io/api/v1/image/assets/TEMP/eede966abdfa6a81623b2075f6f4f5722857c39524ce817d3fa4f5403463282b?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
                        } 
                        alt={showPassword ? "Hide password" : "Show password"} 
                        className="object-contain shrink-0 w-6 aspect-square" 
                      />
                    </button>
                  </div>

                  {error && <p className="self-start mt-2 text-red-600">{error}</p>}
                  
                  <button type="button" className="self-end mt-4 text-purple-900">Forgot Password?</button>
                </div>
                <button type="submit" className="self-center px-16 py-3 mt-28 max-w-full text-2xl font-semibold text-white bg-purple-900 rounded-xl w-[530px] max-md:px-5 max-md:mt-10">
                  {loading ? 'Processing...' : isSignup ? 'Sign Up' : 'Log In'}
                </button>

                <button type="button" className="self-center mt-4 text-purple-900" onClick={() => setIsSignup(!isSignup)}>
                  {isSignup ? 'Already have an account? Log in' : 'Don’t have an account? Sign up'}
                </button>
              </form>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ecb8986c3ccc6d1c31bbc8d6d8f2bf7a3d03d925b0a77c9cd51cd00d9ceaaa6?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef" 
                alt="" 
                className="object-contain aspect-[24.39] mt-[515px] w-[733px] max-md:mt-10 max-md:max-w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
