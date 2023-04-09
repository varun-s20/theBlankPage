function myFunction(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

console.log("hello");
let arr=[];
document.getElementById("submit").addEventListener('click',(e)=>{
    e.preventDefault();
    let LogEntry= document.getElementById("LogEntry").value;
    let Blog= document.getElementById("Blog").value;
    let data={
        Log: LogEntry,
        Info: Blog
    }
    fetch("http://localhost:5000/mydb.myentries",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
});

document.getElementById("submit").addEventListener('click',()=>{
    document.getElementById("myForm").reset();
});

// const getData = async()=>{
   
// await fetch("http://localhost:5000/mydb.myentries",{
//     method:"GET",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })

// // Converting to JSON
// .then(response => response.json())

// // Displaying results to console
// .then(json => arr=json);

// let html=``

// arr.forEach(element => {
// console.log("hellow",element)
// const date=new Date(element.LogEntry)
// html+=`
//     <p>${date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}</p>
//     <p>${element.Blog}</p>
// `
// });

// document.getElementById("block").innerHTML=html;
// }

// getData();


