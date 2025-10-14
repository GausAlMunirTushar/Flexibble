import Logo from "../components/Logo";
import Button from "../components/ui/Button";

const LoginPage = () => {
	return (
		<section className="bg-gray-100 h-screen flex items-center justify-center">
			<div className="w-md bg-white p-8 rounded-xl">
				<Logo />
				<div className="flex flex-col my-4">
					<label
						className="text-xl font-semibold mb-1"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="py-2 px-4 border border-gray-300 rounded focus:outline-violet-500 "
						type="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="flex flex-col">
					<label
						className="text-xl font-semibold mb-1 "
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="py-2 px-4 border border-gray-300 rounded focus:outline-violet-500"
						type="password"
						placeholder="Enter your password"
					/>
				</div>
				<div className="flex items-center justify-between gap-2 mt-4">
					<div className="flex items-center gap-2 ">
						<input
							className="size-4 bg-violet-500"
							type="checkbox"
							name=""
							id="remember"
						/>
						<p>Remember Me</p>
					</div>
					<div>
						<a className="underline text-violet-500" href="">
							Forgot Password?
						</a>
					</div>
				</div>
				<Button
					style="w-full bg-violet-500 py-2 px-4 rounded my-4 cursor-pointer text-white text-center"
					text="Sign In"
				/>
			</div>
		</section>
	);
};

export default LoginPage;
