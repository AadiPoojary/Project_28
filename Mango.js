class Mango {
    constructor(x,y,width){
        var options = {
           //isStatic : true,
           restitution : 0.7,
           friction : 1,
           density : 1
        }
        this.body=Bodies.circle(x,y,width,options);
        this.image=loadImage("mango.png");
        this.width=width;

        World.add(world,this.body);
    }

    display(){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+20,this.width+20);
        pop();
    }    
}