const fetchData = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
        method: "GET",
        headers: {
            "X-Api-Key": "W+CAjl0s4GHkoo+RCQ91eQ==Ulpm8vw9Mf5dVNV8", 
        }
    })

    const data = await response.json();
    console.log(data);
    
}

fetchData();