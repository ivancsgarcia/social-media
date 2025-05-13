import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
    const queryClient = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/register" Component={RegisterPage} />
                    <Route path="/create-post" Component={CreatePostPage} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
