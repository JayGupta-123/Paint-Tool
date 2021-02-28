function _(selector){
    return document.querySelector(selector);
}

function setup(){
    let canvas = createCanvas(650, 500);
    canvas.parent("canvas");
    background(255);
}

function mouseDragged(){
    let type = _("#pen-pencil").checked?"pencil":"brush";
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;
    fill(color);
    stroke(color);
    if(type == "brush"){
        ellipse(mouseX, mouseY, size, size);
    }
    else{
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

_("#reset-canvas").addEventListener("click" , function (){
    background(255);
})

_("#save-canvas").addEventListener("click" , function (){
    saveCanvas(canvas , "download", "png");
})