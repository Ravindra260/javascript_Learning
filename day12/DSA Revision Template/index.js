document.querySelector("form").addEventListener("submit", mydsa);
let userarr = JSON.parse(localStorage.getItem("quedata")) || [];
displaytable(userarr)
function mydsa(event) {
    event.preventDefault()
    let userobj = {
        QueTitle: document.querySelector("#title").value,
        QueLink: document.querySelector("#link").value,
        QueDifficulty: document.querySelector("#difficulty").value
    };
    userarr.push(userobj);
    displaytable(userarr);
    localStorage.setItem("quedata", JSON.stringify(userarr));
}
function displaytable(userarr) {
    document.querySelector("tbody").innerHTML = "";
    userarr.forEach(function (elem) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td");
        td1.innerText = elem.QueTitle;
        let td2 = document.createElement("td");
        td2.innerText = elem.QueLink;
        let td3 = document.createElement("td");
        td3.innerText = elem.QueDifficulty;
        let td4 = document.createElement("td");
        if (elem.QueDifficulty == "Easy") {
            td4.innerText = "No";
        } else {
            td4.innerText = "Yes"
        }
        tr.append(td1, td2, td3, td4);
        document.querySelector("tbody").append(tr);

    })
}

