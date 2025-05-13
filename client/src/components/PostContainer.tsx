export interface Post {
    title: string;
    content: string;
    image?: string;
}

export interface PostContainerProps {
    post: Post;
}

const PostContainer = ({ post }: PostContainerProps) => {
    return (
        <div>
            <div>
                <p className="text-xl font-bold">{post.title}</p>
                <p className="">{post.content}</p>
                <img src={post.image} alt={post.title} />
            </div>
            <div className="flex w-full items-center justify-between border">
                <div>Like</div>
                <div>Dislike</div>
            </div>
        </div>
    );
};

export default PostContainer;
