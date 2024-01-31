fetch("topgames.json")
.then(function(response){
    
    return response.json();
    
})

.then(function(rank){
    
    let placeholder = document.querySelector("#data-output");
    
    let out = "";
    
    for(let rank of ranks)
        
        out += '
    
            <tr>
            
                <td>${topgames.rank}</td>
                <td>${topgames.table_name}</td>
                <td>${topgames.manufacturer}</td>
    
            </tr>
    
    ';
}
      
      placeholder.innerHTML = out;
      
})