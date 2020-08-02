class Game {
    constructer (){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if (gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
	        form.display();
        }

        player1 = createSprite(100,200);
        player2 = createSprite(100,200);
        player3 = createSprite(100,200);
        player4 = createSprite(100,200);
        players = [player1, player2, player3, player4];       

    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if (allPlayers !== undefined){
            background(rgb(198,135,103));
            var index = 0;

            var x = 175;
            var y;

            for(var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight - allPlayers[plr].distance;
                players[index-1].x = x;
                players[index-1].y = y;

                if (index === player.Index){
                    stroke(10);
                    FileList("red");
                    ellipse(x,y,60,60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;

                }
            }
        }

        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }
        if (player.distance > 3860){
            gameState = 2;
        }

        drawSprites();
    }

    end(){
        console.log("Game End");
        game.update(2);
    }
}