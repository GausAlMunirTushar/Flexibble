import Logo from "../components/Logo";
import Button from "../components/ui/Button";

const ForgotPasswordPage = () => {
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

				<Button
					style="w-full bg-violet-500 py-2 px-4 rounded my-4 cursor-pointer text-white text-center"
					text="Send Reset Link"
				/>
				<div className="text-center">
					<a
						className="underline text-center text-violet-500"
						href=""
					>
						Back to Login
					</a>
				</div>
			</div>
		</section>
	);
};

export default ForgotPasswordPage;
