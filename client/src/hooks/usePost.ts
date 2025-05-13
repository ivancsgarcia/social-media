import { useMutation, useQuery } from "@tanstack/react-query";
import postApi from "../services/postApi";

const usePost = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: () => postApi.get("/"),
    });
};

const useCreatePost = () => {
    return useMutation({
        mutationFn: (data: {
            title: string;
            content: string;
            image: File | null;
        }) => postApi.post("/create", data),
    });
};

export { usePost, useCreatePost };
