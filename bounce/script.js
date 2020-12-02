
ball=document.getElementById('ball')
rand=Math.random((22,340))*100
rand=Math.round(rand)
console.log(rand)
conter=10
conter2=10
boxXP=300
boxXN=0
boxYP=200
boxYN=0
mt=30
mb=0
ml=0
mr=0
x='pos'
y='pos'
speed=1
ischaged=0
setInterval(() => {
    ball.style.margin=mt+"px "+mr+"px "+mb+"px "+ml+"px "
    ball.style.boxShadow=conter2+"px "+conter2+"px 10px black"
    
    conter+=1
    conter2=0.1
    if (ml<boxXN){
        x='pos'
        ischaged=1
    }
    else if (ml>boxXP){
        x='neg'
        ischaged=1
    }
    else{
        ischaged=0
    }
    if(mt>boxYP){
        y='neg'
        ischaged=1
    }
    else if(mt<boxYN){
        y='pos'
        ischaged=1
    }
    else{
        ischaged=0
    }
    if(x=='pos'){
        ml++
    }
    else{
        ml--
    }
    if(y=='pos'){
        mt+=speed
    }
    else{
        mt-=speed
    }
    if(ischaged){
        ball.style.backgroundColor='rgb('+Math.round(Math.random((22,340))*100)+','+Math.round(Math.random((22,340))*100)+','+Math.round(Math.random((22,340))*100)+')'
        speed+=0
    }
    
}, 2);


