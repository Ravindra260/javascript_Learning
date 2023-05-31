let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  var op=users.filter(function(elem){
    return elem.place=="Banglore"
  }).map(function(elem){
    return elem.firstName
  })
  console.log(op)