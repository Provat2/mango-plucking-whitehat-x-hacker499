class Tree{
    constructor(x, y){
        var options = {
            restitution: 0.3,
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, 40, 300, options);
        this.width = 650;
        this.height = 650;
        this.image = loadImage("sprites/tree.png")
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}