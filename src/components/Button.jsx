export  function Button({ label, onClick}){
    return(
        <button
            type="button"
            onClick={onClick}
            style={{
                padding:"10px 14px",
                borderRadius: 8,
                border:"1px solid #ddd",
                background:"#fff",
                cursor:"pointer", 
                color: "#221d1c", 
                fontWeight:600
            }}
            >
                {label}
        </button>
    );
}
