

function Clear() {
    function clearLocalstroage() {
         localStorage.clear();
    }

    return (
        <button onClick={clearLocalstroage}>Clear All</button>
    )
   
}

export default Clear;


