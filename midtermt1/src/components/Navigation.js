const Navigation = ()=>{
    return(
        <>
        <div className="nav">
            <img src= {process.env.PUBLIC_URL+ "./logo192.png"} width="120"/>
            <ul>
            
                <li><a href="/">Component One</a></li>
                <li><a href="/ComTwo">Component Two</a></li>
                <li><a href="/ComThree">Component Three</a></li>
            </ul>
        </div>
        </>
    )
}
export default Navigation