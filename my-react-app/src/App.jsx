import { Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetail from "./pages/PostDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}