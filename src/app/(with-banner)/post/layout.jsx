import Counter from "./Counter"

export default function Layout({ children }) {
    return (
        <div>
            <br/>   
            <h1>Posts</h1>
            <marquee style={{background: '#fff', color: '#000'}}> With love <a href="https://github.com/dmunoz05"><code style={{textDecoration: 'underline', fontSize: '16px'}}>dmunoz05</code></a> 💟 </marquee>
            <br/>
            {children}
        </div>
    )
}