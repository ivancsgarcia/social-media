import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLogin } from "../hooks/useAuth";
import { useNavigate } from "react-router";

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const { mutate: login, isPending, data, error } = useLogin();
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login(form);
        navigate("/");
    };
    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="border px-4 py-8">
                <h1 className="mb-4 text-center text-xl font-bold">Login</h1>
                <div className="mb-4">
                    <label className="mb-1 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
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
                        className="w-full border p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full border p-2"
                >
                    Login
                </button>
                {data && <p>Welcome, {data.data.user.username}!</p>}
                {error && <p>{(error as any)?.response?.data}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
