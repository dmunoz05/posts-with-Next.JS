import Link from "next/link";

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ children, params }) {

    const { id } = params;
    const post = await fetchSinglePost(id);

    return (
        <article>
            <br/>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br/>
            <Link href={`/post/${id}/comments`}>Ver comentarios</Link>
            <br/>
            {children}
        </article>
    )
}