import Image from "next/image";

const fetchComments = async (id) => {

    await new Promise(resolve => setTimeout(resolve, 3000))

    return fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}


export default async function Comments({ params }) {
    const { id } = params;
    const comments = await fetchComments(id);

    return (
        <>
            <br />

            <ul style={{ background: '#444', fontSize: '10px' }}>
                <br />
                {comments.map(comment => (
                    <>
                        <li key={comment.id}>
                            <Image width={80} height={80} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} />
                            <h4>{comment.name}</h4>
                            <small>{comment.body}</small>
                        </li>
                        <br />
                        <br />
                    </>
                ))}
            </ul>
        </>
    )
}