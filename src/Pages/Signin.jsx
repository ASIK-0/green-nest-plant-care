import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
    const { signIn } = use(AuthContext)
    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGoogleSignin = () => {
    };

    const handleForgetPassword = () => {
    };


    return (
        <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-lime-500 via-green-700 to-green-800 relative overflow-hidden">
            {/* Animated glow orbs */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
            </div>

            <div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-40 p-6 lg:p-10 text-white">
                    {/* Left section */}
                    <div className="max-w-lg text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold drop-shadow-lg">
                            Welcome Back
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Log in to continue your plant journey. Keep your garden alive, one leaf at a time. 🍃.
                        </p>
                    </div>

                    {/* Login card */}
                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                        <form onSubmit={handleSignin} className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Login
                            </h2>
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm mb-1">Password</label>
                                <input
                                    type={"password"}
                                    name="password"
                                    placeholder="Enter Your Password"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <button
                                className="hover:underline cursor-pointer"
                                onClick={handleForgetPassword}
                                type="button"
                            >
                                Forget password?
                            </button>

                            <button type="submit" className="my-btn">
                                Login
                            </button>

                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>

                            {/* Google Signin */}
                            <button
                                type="button"
                                onClick={handleGoogleSignin}
                                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="google"
                                    className="w-5 h-5"
                                />
                                Continue with Google
                            </button>

                            <p className="text-center text-sm text-white/80 mt-3">
                                Don’t have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="text-pink-300 hover:text-white underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
