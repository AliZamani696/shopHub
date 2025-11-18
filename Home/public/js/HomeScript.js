      document.querySelector("#btnSearchBar").addEventListener("click",async(e)=>{
                let searchBarData =  document.querySelector("#searchBar").value
                await fetch("http://localhost:8090/SearchBar",{
                        method:"POST",
                        headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                        },
  // Automatically converted to "username=example&password=password"
                        body: new URLSearchParams({ data: searchBarData}),
                        })
        e.preventDefault()
     })
console.log("hello")
