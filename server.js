/*var count=34;
count++;
console.log("Server is running");
console.log(count);


//CTL + SHIFT + C   

*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Amit Pisal");
};
var onDefault=function(req, res){
    res.send("<h1><div style="color: rgb(252,0,0);">Dear Mummy and Maushi</div></h1>"+
              "<hr/>"+
              "<ul>"+
                    " <li><div style="color: rgb(107, 52, 211);">Mummy and Maushi, throughout the life, your valuable advices have led me safely. <br />Your words are my guidance, and your love is the most precious item to me. <br />Now, this is the opportunity to thank you for everything U did for me.</div></li>"+
                    " <li><div style="color: rgb(214, 47, 172);">To the woman that always brought the best in me <br />or at least saw the best in me regardless of what I did.</div></li>"+
                    " <li><div style="color: rgb(0, 91, 173);">My amazing mother and Maushi,<br/>Your birthday deserves all the amazing colorsof celebration. <br />You both are the best mother's in all the land </div></li>"+
                    " <li><br /><h2><div style="color: rgb(174, 0, 255);">Happy Birthday Dear Lovely Ladies</div><h2></li>"+
             "</ul>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
// if external packages are required
// we have to download those packages from internet using  package manager tool
// Runtime--------tools-------------packages-----------------------config file
// Java-----------maven--------------.jar files----------------------pom.xml
// Android--------graddle------------android jar file----------------pom.xml
// Python---------pip----------------Python libraries----------------
// .NET ---------Nugget--------------dll files-----------------------package.config
// NodeJS----------npm --------------download node modules-----------package.json 
