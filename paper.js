class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false		
			}
		this.x=x;
		this.y=y;
    this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}