var canvas= new fabric.Canvas("myCanvas")
ctx=canvas.getContext("2D")

blockImageWidth=30;

blockImageHeight=30;

player_x = 10;

player_y = 10;

var playerObject = ""
var blockImageObject=""

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
    playerObject=img;
    playerObject.scaleToWidth(150)
    playerObject.scaleToHeight(150)
    playerObject.set({
        top:player_y, left:player_x
    })
    canvas.add(playerObject)
})
}


function newImage(getImage){
    fabric.Image.fromURL(getImage, function(img){
        blockImageObject=img;
        blockImageObject.scaleToWidth(blockImageWidth)
        blockImageObject.scaleToHeight(blockImageHeight)
        blockImageObject.set({
            top:player_y, left:player_x
        })
        canvas.add(blockImageObject)
    })
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == "65"){
       blockImageWidth = blockImageWidth+10;
       blockImageHeight = blockImageHeight+10;
       document.getElementById("current_width").innerHTML=blockImageWidth;
       document.getElementById("current_height").innerHTML=blockImageHeight;
    }

    if(e.shiftKey == true && keyPressed == "83"){
        blockImageWidth = blockImageWidth-10;
        blockImageHeight = blockImageHeight-10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }

    if(keyPressed == "38"){
        up()
    }
    if(keyPressed == "40"){
        down()
    }
    if(keyPressed == "37"){
        left()
    }
    if(keyPressed == "39"){
        right()
    }

    if(keyPressed == "65"){
        newImage("a.jpg")
    }

    if(keyPressed == "66"){
        newImage("b.jpg")
    }
    
    if(keyPressed == "67"){
        newImage("c.jpg")
    }

    if(keyPressed == "68"){
        newImage("d.jpg")
    }

    if(keyPressed == "69"){
        newImage("e.jpg")
    }

    if(keyPressed == "70"){
        newImage("f.jpg")
    }

    if(keyPressed == "71"){
        newImage("g.jpg")
    }
    

    if(keyPressed == "72"){
        newImage("h.jpg")
    }
    
    if(keyPressed == "73"){
        newImage("i.jpg")
    }

    if(keyPressed == "74"){
        newImage("j.jpg")
    }

    if(keyPressed == "75"){
        newImage("k.jpg")
    }

    if(keyPressed == "76"){
        newImage("L.jpg")
    }

    if(keyPressed == "77"){
        newImage("m.jpg")
    }

    if(keyPressed == "78"){
        newImage("n.jpg")
    }

    if(keyPressed == "79"){
        newImage("O.jpg")
    }

    if(keyPressed == "80"){
        newImage("p.jpg")
    }

    if(keyPressed == "81"){
        newImage("q.jpg")
    }

    if(keyPressed == "82"){
        newImage("r.jpg")
    }

    if(keyPressed == "83"){
        newImage("s.jpg")
    }

    if(keyPressed == "84"){
        newImage("t.jpg")
    }

    if(keyPressed == "85"){
        newImage("u.jpg")
    }

    if(keyPressed == "86"){
        newImage("v.jpg")
    }

    if(keyPressed == "87"){
        newImage("w.jpg")
    }

    if(keyPressed == "88"){
        newImage("x.jpg")
    }

    if(keyPressed == "89"){
        newImage("y.jpg")
    }

    if(keyPressed == "90"){
        newImage("z.jpg")
    }


}

function up(){
    if(player_y>=0){
        player_y=player_y-blockImageHeight
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function down(){
    if(player_y<=600){
        player_y=player_y+blockImageHeight
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function right(){
    if(player_x<=1000){
        player_x=player_x+blockImageWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-blockImageWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}


function clearboard(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}