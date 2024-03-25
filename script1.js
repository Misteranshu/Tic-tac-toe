let boxes= document.querySelectorAll(".box");
let MSG =document.querySelector(".MSG");
let a =document.querySelector(".third");
let b =document.querySelector(".second");
let turnO=true;
const winpatterns= [
 [0,1,2],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];
const resetgames =()=>{
        turnO=true;
        enableboxes();
        MSG.classList.add("MSG");
};
boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turnO){
           box.innerText="x";
           turnO=false;
        }
        else{
       box.innerText="o";
       turnO=true;
        }
        box.disabled =true;
        checkwinners();
            });    
        }); 
        const disableBoxes =()=>{
            for(let box of boxes){
                box.disabled=true;
            }
        };
        const enableboxes =()=>{
            for(let box of boxes){
                box.disabled=false;
                box.innerText="";
            }
        };
        const showWinner =(winner)  =>{
            MSG.innerText=`congratulation,winner is ${winner}`;
          MSG.classList.remove("MSG");
          disableBoxes();
          drawgames();
        };
     
const checkwinners= ()=>{
    for( let pattern of winpatterns){
     let pss1v =boxes[pattern[0]].innerText;
     let pss2v =boxes[pattern[1]].innerText;
     let pss3v =boxes[pattern[2]].innerText;
    if(pss1v!="" && pss2v!=""&& pss3v!=""){
    if(pss1v==pss2v && pss2v==pss3v){
        showWinner(pss1v);
        return true;
        }
    }
}
};
b.addEventListener("click",resetgames);
a.addEventListener("click",resetgames);
