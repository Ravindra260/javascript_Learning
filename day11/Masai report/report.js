// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks



document.querySelector("form").addEventListener("submit",myfunction);
function myfunction(event){
    event.preventDefault()
    console.log("my ");
    let avatar=document.querySelector("#image").value;
    let name=document.querySelector("#name").value;
    let Batch=document.querySelector("#batch").value;
    let dsa=document.querySelector("#dsa").value;
    let skillathon=document.querySelector("#cs").value;
    let coding=document.querySelector("#coding").value;
    console.log(avatar,name,batch,dsa,skillathon,coding)
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td2.innerText=name;
    var td3 = document.createElement("td");
     td3.innerText=Batch;
    var td4 = document.createElement("td");
    td4.innerText=dsa;
    var td5 = document.createElement("td");
    td5.innerText=skillathon;
    var td6 = document.createElement("td");
    td6.innerText=coding;
    var total= Number(dsa)+Number(skillathon)+Number(coding);
    var percentange= (total/30)*100;
    var td7 = document.createElement("td");
    td7.innerText=percentange;
    var td8 = document.createElement("td");
    if(percentange>50){
        td8.innerText="Regular"
    }else{
        td8.innerText="Aysnc";
        td8.style.color="red";
    }
    var td9 = document.createElement("td");
    td9.innerText="DELETE"
    td9.addEventListener("click",mydl);
    td9.style.backgroundColor="red";
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr);
} 
    function mydl(event){
        event.target.parentNode.remove();
    }
