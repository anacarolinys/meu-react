export function Header ({ title, subtitle}){
    return(
        <header style={{padding: 16, }}>
            <h1 style={{margin: 0, fontSize: 24}}>{title}</h1>

        {subtitle &&(
            <p style={{margin: "6px 0 0", color:"#b05ff1"}}>
                {subtitle}
            </p>
        )}
        </header>
    );

}