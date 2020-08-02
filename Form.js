class Form {
    constructor(){
        /*this.input = createInput("name");
        this.button = createButton("PLAY");
        this.greetings = createElement("h3");*/
    }
    display(){
        var title = createElement("h2");
        title.html("Enter Your Name");
        title.position(displayWidth/2-20,0);
         var input = createInput("Name");
         var button = createButton("PLAY");
         var greetings = createElement("h1");
        input.position(displayWidth/2,160);
        button.position(displayWidth/2,200);

        

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            /*player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);*/
            greetings.html("Hi " + name );
            greetings.position(displayWidth/2+10,160);
            title.hide();

            
            var enthu = createElement("h2");
            enthu.html("Welcome to the Olympics!!!")
            enthu.position(displayWidth/2-75,200);
        })
    }
   /* hide(){
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }*/
}