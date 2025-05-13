import { useMutation } from "@tanstack/react-query";
import authApi from "../services/authApi";

export const useRegister = () => {
    return useMutation({
        mutationFn: (data: {
            username: string;
            email: string;
            password: string;
        }) => authApi.post("/register", data),
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: { email: string; password: string }) =>
            authApi.post("/login", data),
    });
};
