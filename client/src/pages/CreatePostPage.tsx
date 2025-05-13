import { useState } from "react";
import { useCreatePost } from "../hooks/usePost";

interface Post {
    title: string;
    content: string;
    image: File | null;
}

const CreatePostPage = () => {
    const { mutate: createPost } = useCreatePost();
    const [post, setPost] = useState<Post>({
        title: "",
        content: "",
        image: null,
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPost(post);
    };
    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="border p-4">
                <h1 className="mb-4 text-xl font-bold">Create Post</h1>
                <div className="mb-4">
                    <label className="mb-1 block">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1 block">Content</label>
                    <textarea
                        name="content"
                        value={post.content}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="mb-1 block">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setPost({
                                ...post,
                                image: e.target.files
                                    ? e.target.files[0]
                                    : null,
                            })
                        }
                        className="w-full rounded border p-2"
                    />
                </div>
                <button type="submit" className="w-full rounded border p-2">
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePostPage;
