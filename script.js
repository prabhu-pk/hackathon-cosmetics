var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var d=JSON.parse(req.response);
    console.log(d);
    var reg = d.filter((a)=>a.region==="Asia");
    var pop = d.filter((a)=>a.population<200000);
       var res=d.map((e)=>e.population).reduce((a,e)=>a+e);
console.log(reg);
console.log(res);
console.log(pop);
d.forEach((a)=> {console.log(`${a.name} ${a.flag} ${a.capital}`)});

var cur = d.filter((a)=>a.currencies.code==="USD");
console.log(cur)
    }

// var student=[{
//     name:"alex",
//     marks:60
// },
// {
//     name:"bob",
//     marks:70
// },{
//     name:"alice",
//     marks:80
// },
// {
//     name:"doe",
//     marks:90
// }];
// console.log(student.filter((e)=>e.marks>60).map((e)=>e.name));

