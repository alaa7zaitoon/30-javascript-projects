const secondHand=document.querySelector(".seconds");
const minutHand=document.querySelector(".minuts");
const housrhand=document.querySelector(".hours");
function setDate(){
    const now= new Date();



    const second=now.getSeconds();
    const seconddegree=((second/60)*360)+90;
    secondHand.style.transform=`rotate(${seconddegree}deg)`;
    console.log(second)
   



    const minut=now.getMinutes();
    const minutdegree=((minut/60)*360)+ ((second/60)*6)+90;
    minutHand.style.transform=`rotate(${minutdegree}deg)`;




    const hour=now.getHours();
    const hourdegree=((hour/12)*360)+((min/60)*30)+90;
    housrhand.style.transform=`rotate(${hourdegree}deg)`;

}

setInterval(setDate,1000);
setDate();
