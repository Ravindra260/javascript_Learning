document.querySelector("form").addEventListener("submit", mydsa);
let userarr = JSON.parse(localStorage.getItem("quedata")) || [];
displaytable(userarr)
function mydsa(event) {
    event.preventDefault()
    let userobj = {
        Date: document.querySelector("#date").value,
        StockName: document.querySelector("#title").value,
        BUYSELL: document.querySelector("#stock").value,
        PORL: document.querySelector("#difficulty").value,
        Amount: document.querySelector("#LOSS").value

    };
    userarr.push(userobj);
    console.log(userarr);
    displaytable(userarr);
    localStorage.setItem("quedata", JSON.stringify(userarr));
}
function displaytable(userarr) {
    document.querySelector("tbody").innerHTML = "";
    userarr.forEach(function (elem) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td");
        td1.innerText = elem.Date;
        let td2 = document.createElement("td");
        td2.innerText = elem.StockName;
        let td3 = document.createElement("td");
        td3.innerText = elem.BUYSELL;
        let td4 = document.createElement("td");
        td4.innerText = elem.PORL;
        let td5 = document.createElement("td");
        td5.innerText = elem.Amount;
        // if (elem.Amount >= 0) {
        //     td5.color = "red";
        // } else {
        //     td5.color = "green"
        // }
        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr);

    })
}

