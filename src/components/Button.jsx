export  function Button({ label, onClick, width}){
    return(
        <button
            type="button"
            onClick={onClick}
            style={{
                width: width ?? "fit-content",
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
