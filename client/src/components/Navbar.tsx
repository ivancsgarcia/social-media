const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-around border p-4">
                <div>Social Media</div>
                <div>
                    <nav>
                        <ul className="flex gap-4">
                            <li className="hover:underline">
                                <a href="">Home</a>
                            </li>
                            <li className="hover:underline">
                                <a href="">Communities</a>
                            </li>
                            <li className="hover:underline">
                                <a href="/create-post">Create Post</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
