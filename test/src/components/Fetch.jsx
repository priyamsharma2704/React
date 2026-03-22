import { useQuery } from "@tanstack/react-query";

function Fetch() {
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
                res.json()
            ),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Posts</h1>
            <div style={{ display: "grid", gap: "1rem" }}>
                {posts.slice(0, 5).map((post) => (
                    <div
                        key={post.id}
                        style={{
                            padding: "1rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                        }}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fetch;
