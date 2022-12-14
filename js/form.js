class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(550, 30);
        this.title.style('font-size', '100px');
        this.title.style('color', 'skyblue');
        this.input.position(550, 250);
        this.input.style('width', '500px');
        this.input.style('height', '50px');
        this.input.style('background', 'lavender');
        this.input.style('font-size', '40px');
        this.button.position(550, 350);
        this.button.style('width', '200px');
        this.button.style('height', '60px');
        this.button.style('background', 'lightpink');
        this.button.style('font-size', '30px');
        this.reset.position(1200, 250);
        this.reset.style('width', '100px');
        this.reset.style('height', '60px');
        this.reset.style('background', 'lightpink');
        this.reset.style('font-size', '30px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(600, 250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();


        });

    }
}