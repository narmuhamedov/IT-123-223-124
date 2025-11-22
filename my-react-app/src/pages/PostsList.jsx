import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Блог</h1>
            {posts.map(post => (
                <div key={post.id} style={{ marginBottom: 15 }}>
                    <h3>{post.title}</h3>
                    <Link to={`/post/${post.id}`}>Читать подробнее</Link>
                </div>
            ))}
        </div>
    );
}