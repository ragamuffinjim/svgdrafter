// alert("CONNECTED!");

// added comment for github test
// added comment for 2ndgithub test
// added comment for 3rdgithub test

let line = document.getElementById("line");

line.addEventListener("click", function () {
    let x1 = prompt("Start point x");
    let y1 = prompt("start point y");
    let x2 = prompt("end point x");
    let y2 = prompt("end point y");
    let rgb = prompt("RGB?");
    let sw = prompt("Stroke-width?");
    console.log(x1, y1, x2, y2);
    let a = "<line x1=\"" + x1 + "\" y1=\"" + y1 + "\" x2=\"" + x2 + "\" y2=\"" + y2 + "\" style=\"stroke: rgb(" + rgb + "); stroke-width:" + sw + "\" />";
    console.log(a);
    document.getElementById("svg").innerHTML += a;
    if (document.getElementById("svg") != null) {
        var idPost = document.getElementById("svg").innerHTML;
    }

});

let path = document.getElementById("path");

path.addEventListener("click", function () {
    let m = prompt("Start point? x y with no comma");
    let horv = prompt("H or V?");
    let horva = horv.toUpperCase();
    let length = prompt("Length?");
    let rgb = prompt("RGB?");
    let sw = prompt("Stroke-width?");
    console.log(m, horva, length, rgb, sw);
    let a = "<path d=\"M " + m + " " + horva + " " + length + " \" style=\"stroke: rgb(" + rgb + "); stroke-width:" + sw + "\" />";
    console.log(a);
    document.getElementById("svg").innerHTML += a;
    if (document.getElementById("svg") != null) {
        var idPost = document.getElementById("svg").innerHTML;
    }
});

let offset = document.getElementById("offset");

offset.addEventListener("click", function () {
    let mx = prompt("Start point? x");
    let mxa = parseInt(mx);
    let my = prompt("Start point? y");
    let mya = parseInt(my);
    let horv = prompt("H or V?");
    let horva = horv.toUpperCase();
    let length = prompt("Length?");
    let rgb = prompt("RGB?");
    let sw = prompt("Stroke-width?");
    let xoffset = prompt("x offset?");
    let xoffseta = parseInt(xoffset);
    let yoffset = prompt("y offset?");
    let yoffseta = parseInt(yoffset);
    console.log(mxa + xoffseta, mya + yoffseta);
    let xoffsetline = mxa + xoffseta;
    let yoffsetline = mya + yoffseta;
    console.log(mx, horva, length, rgb, sw);
    // let a = "<path d=\"M " + mx + " " + my + " " + horva + " " + length + " \" style=\"stroke: rgb(" + rgb + "); stroke-width:" + sw + "\" />";
    let b = "<path d=\"M " + mx + " " + my + " " + horv + " " + length + " \" style=\"stroke: rgb(" + rgb + "); stroke-width:" + sw + "\" />";
    let c = "<path d=\"M " + xoffsetline + " " + yoffsetline + " " + horv + " " + length + " \" style=\"stroke: rgb(" + rgb + "); stroke-width:" + sw + "\" />";
    // let c = "<path d=\"M " + xoffsetline + " " + " " + horv + " " + length + " \" style=\"stroke: rgb(" + rgb + "); stroke-width:" + sw + "\" />";
    console.log(b, c);
    document.getElementById("svg").innerHTML += b;
    if (document.getElementById("svg") != null) {
        var idPost = document.getElementById("svg").innerHTML;
    }
    document.getElementById("svg").innerHTML += c;
    if (document.getElementById("svg") != null) {
        var idPost = document.getElementById("svg").innerHTML;
    }
});

let rect = document.getElementById("rect");

rect.addEventListener("click", function () {
    let x = prompt("x start?");
    let y = prompt("y start?");
    let w = prompt("width?");
    let h = prompt("height?");
    let rgb = prompt("rgb?");
    let sw = prompt("stroke-width");
    let a = `<rect x=\"${x}\" y =\"${y}\" width =\"${w}\" height=\"${h}\" stroke=\"rgb(${rgb})\" stroke-width=\"${sw}\" fill=\"transparent\" />`;
    console.log(a);
    document.getElementById("svg").innerHTML += a;
    if (document.getElementById("svg") != null) {
        var idPost = document.getElementById("svg").innerHTML;
    }
});


let circle = document.getElementById("circle");

circle.addEventListener("click", function () {
    let cx = prompt("cx?");
    let cy = prompt("cy?");
    let r = prompt("radius?");
    let rgb = prompt("rgb?");
    let sw = prompt("stroke-width");
    let a = `<circle cx=\"${cx}\" cy =\"${cy}\" r=\"${r}\" stroke=\"rgb(${rgb})\" stroke-width=\"${sw}\" fill=\"transparent\" />`;
    console.log(a);
    document.getElementById("svg").innerHTML += a;
    if (document.getElementById("svg") != null) {
        var idPost = document.getElementById("svg").innerHTML;
    }
});

// let x = document.getElementById("x");

// x.addEventListener("click", function () {
//     console.log(x);
// });

function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputId").value;
    // Displaying the value
    console.log(inputVal);
    let a = `<h2>${inputVal}</h2>`;
    document.getElementById("fun").innerHTML += a;
    if (document.getElementById("fun") != null) {
        var idPost = document.getElementById("fun").innerHTML;
    }
};



