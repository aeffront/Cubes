
const canvas = document.getElementById("myCanvas");

ctx = canvas.getContext('2d');



width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

ctx.filter = "contrast(200%) saturate(200%)"


hslCount = 0;


class player{
    constructor(x,y,z,size,Dx,Dy,Dz,color,count=0){
        this.x=x;
        this.y=y;
        this.z=z;
        this.size=size;
        this.Dx=Dx;
        this.Dy=Dy;
        this.Dz=Dz;
        this.colorA=color;
        this.colorB=color+180;
        this.count=count

    }
    updatePos(){
        this.x+=(this.Dx-this.x)*0.01;
        this.y+=(this.Dy-this.y)*0.01;
        this.z+=(this.Dz-this.z)*0.01;
        
        if(Math.abs(this.Dx-this.x)<100){
            while((Math.abs(this.Dx-this.x)<100)||(Math.abs(this.Dy-this.y)<100)){
                this.Dx=Math.random()*width;
                this.Dy=Math.random()*height;
                this.Dz=Math.random()*100;
                console.log('a');
            }
            this.count++

        } 
        else if(Math.abs(this.Dy-this.y)<100){
            while((Math.abs(this.Dx-this.x)<100)||(Math.abs(this.Dy-this.y)<100)){
                this.Dx=Math.random()*width;
                this.Dy=Math.random()*height;
                this.Dz=Math.random()*100;
                console.log('a');
            }
            this.count++

        }

        

       
    }
    draw(){
        this.size = this.z;
        this.colorA+=1;
        ctx.fillStyle="hsla("+this.colorA+" ,40%, 80% ,1)";
        ctx.fillRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size)
        this.colorB = this.colorA+180
        ctx.strokeStyle="hsla("+this.colorB+" ,80% ,30% ,1)";
        ctx.lineWidth = this.size*0.02;
        ctx.strokeRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size)
        ctx.lineWidth = this.size*0.05;
        
        /*ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.stroke()*/
    }
}

myCube = new player(Math.random()*width,Math.random()*height,Math.random()*100,20,Math.random()*width,Math.random()*height,Math.random()*100,0);

max = Math.floor(Math.random()*20)+10

ctx.fillStyle='white';
ctx.fillRect(0,0,width,height);
function main(){
    

    if(myCube.count<max){
        
        myCube.draw();
        myCube.updatePos();
        requestAnimationFrame(main);
    }


}

main()