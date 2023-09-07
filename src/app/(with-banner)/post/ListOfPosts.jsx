import { LikeButton } from "./LikeButton"
import Link from "next/link";

const fetchPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function PostPage() {

    const posts = await fetchPost();

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href='/post/[id]' as={`/post/${post.id}`}>
                <h1 style={{ color: '#09f' }}>{post.title}</h1>
                <p>{post.body}</p>
                <br/>
                <LikeButton id={post.id} />
                <br/>
            </Link>
            <br/>
        </article>
    ))

}