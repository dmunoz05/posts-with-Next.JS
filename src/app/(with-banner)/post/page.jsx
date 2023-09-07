import { Suspense } from "react"
import ListOfPost from "./ListOfPosts"

export default async function PostPage() {

    return (
        <section>
            <Suspense fallback={<p>Cargando posts ...</p>}>
                <br/>
                <ListOfPost />
            </Suspense>

        </section>
    )
}