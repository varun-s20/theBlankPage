function myFunction(x) {
    x.classList.toggle("change");
}

let sidenav=document.getElementById("mySidenav");
function openNav() {
    // sidenav.classList.add("open");
    sidenav.style.width = "250px";
}

function closeNav() {
    // sidenav.classList.remove("open");
    sidenav.style.width = "0";
}

// document.getElementById('myDiv').addEventListener('click',()=>{
//     if(sidenav.classList.contains("open")){
//         console.log("Clicked");
//         closeNav();
//     }
// })

  console.log("hello");


  const getData = async()=>{
   
    await fetch("http://localhost:5000/mydb.myentries",{
        method:"GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
    // Converting to JSON
    .then(response => response.json())
    
    // Displaying results to console
    .then(json => arr=json);
    
    let html=``
    
    arr.forEach(element => {
    console.log("hellow",element)
    const date=new Date(element.LogEntry)
    html+=`
    <div class="arr-panel">
        <p class="animals"><b>DATE:</b><br><br> ${date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}&emsp;&emsp;&emsp;&emsp;&emsp;</p>
        <p class="animals"><b>ENTRY:</b><br> <br>${element.Blog}</p>
    </div>
    `
    console.log(html);
    });
    
    const container = document.getElementById('grid');
    container.innerHTML=html;
}
    
function search_data() {
    let input = document.getElementById('search').value
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";  
        }
    }
}
    
getData();


