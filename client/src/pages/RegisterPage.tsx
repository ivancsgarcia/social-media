import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRegister } from "../hooks/useAuth";
import { useNavigate } from "react-router";

interface RegisterForm {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const { mutate: register, isPending, isSuccess, error } = useRegister();
    const [form, setForm] = useState<RegisterForm>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        register({
            username: form.username,
            email: form.email,
            password: form.password,
        });

        navigate("/login");
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="border px-4 py-8">
                <h1 className="mb-4 text-center text-xl font-bold">Register</h1>

                <div className="mb-4">
                    <label className="mb-1 block">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1 block">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1 block">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full border p-2"
                >
                    Register
                </button>

                {isSuccess && <p>Registration successful!</p>}
                {error && <p>{(error as any)?.response?.data}</p>}
            </form>
        </div>
    );
};

export default RegisterPage;
