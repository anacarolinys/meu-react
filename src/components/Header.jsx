export function Header ({ title, subtitle}){
    return(
        <header style={{padding: 16, borderBottom:"1px solid #eee"}}>
            <h1 style={{margin: 0, fontSize: 24}}>{title}</h1>

        {subtitle &&(
            <p style={{margin: "6px 0 0", color:"#555"}}>
                {subtitle}
            </p>
        )}
        </header>
    );

}