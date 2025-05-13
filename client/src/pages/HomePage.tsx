import Navbar from "../components/Navbar";
import PostContainer, { type Post } from "../components/PostContainer";
import { usePost } from "../hooks/usePost";

const HomePage = () => {
    const { data: posts, isLoading, error } = usePost();

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {(error as any)?.response?.data}</div>;
    return (
        <>
            <Navbar />
            <div className="container mx-auto min-h-screen border px-4 py-8">
                <h1>This is Home Page.</h1>
                <div>
                    {posts?.data.map((post: Post) => (
                        <PostContainer post={post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
