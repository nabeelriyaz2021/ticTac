let boxes = document.querySelectorAll(".box");
let res = document.querySelector("#reset-btn");
let newG  = document.querySelector("#new-btn");
let msgC = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn = true;
let c=0;
const resetGame = () => {
    turn = true;
    c = 0;
    enableBoxes();
    msgC.classList.add("hide");
  };

const enableBoxes=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const gameDraw=()=>{
    msg.innerText="The Game is Draw";
    msgC.classList.remove("hide");
  }
 
    


  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "O";
            turn = false;
        }else{
            box.innerText="X";
            turn = true;
        }
        box.disabled = true;
        c++;
        let isWin = checkWinner();
        if(c===9 && !isWin){
            gameDraw();
        }

    })
  })
  const showWinner=(pos)=>{
    msg.innerText=`Winner is ${pos}`;
    msgC.classList.remove("hide");
  }
  const checkWinner=()=>{
    for(let pat of winPatterns){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
  }
newG.addEventListener("click",resetGame);
res.addEventListener("click",resetGame);
