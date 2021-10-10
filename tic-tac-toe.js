window.onload = (event) => 
//load the whole window
{
  let xoswitch = true;
  let squares = document.querySelectorAll("#board > div");
  let win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  let bar = document.getElementById("status");
  let newgame = document.getElementsByClassName("btn");
  
  newgame[0].addEventListener("click", function()
  {
    
    squares.forEach((square)=> 
    //incrementing through each square
    {
      square.classList.add("square");
      square.innerHTML = "";
    });
    xoswitch = true;
  });

  squares.forEach((square)=> 
  //incrementing through each square
  {
    square.classList.add("square");
    square.innerHTML = "";
    //setting each square to have a blank text that will be replaced with X or O
  
    square.onmouseover = (event)=>{
      square.style.transition = "all .5s ease-in-out"
      square.classList.add("hover");
      //adding the hover settings from the css file to the square
    }
    square.onmouseout = (event)=>{
        square.classList.remove("hover");
        //removing the hover settings from the css file from the square
    }

    square.addEventListener("click", function()
    //add the click functionality to each square
    {
      if((xoswitch == true) && (square.innerHTML == ''))
      {
        square.innerHTML = "X";
        //change square to X
        square.classList.add("X");
        //change colour to X class colour
        xoswitch = false;
        //make the next input an O
      }else if ((xoswitch == false) && (square.innerHTML == ''))
      {
        square.innerHTML = "O";
        //change square to O
        square.classList.add("O");
        //change colour to O class colour
        xoswitch = true;
        //make the next input an X
      };

      
      win.forEach((check)=>
      {
          if((squares[check[0]].innerHTML == "X") && (squares[check[1]].innerHTML == "X") && (squares[check[2]].innerHTML == "X"))
          //check if there are any consecutive 3 X's
          {
            bar.classList.add("you-won");
            //change the status bar to the you-won class
            bar.innerHTML=("Congratulations! X is the Winner!");
            //change status bar text
            //prevents from continuing after one side wins
            squares.forEach((sq)=>
            {
              if (sq.innerHTML == "")
              {
                sq.innerHTML = " ";
              }
            });
          }
          else if((squares[check[0]].innerHTML == "O") && (squares[check[1]].innerHTML == "O") && (squares[check[2]].innerHTML == "O"))
          //check if there are any consecutive 3 O's
          {
            bar.classList.add("you-won");
            //change the status bar to the you-won class
            bar.innerHTML=("Congratulations! O is the Winner!");
            //change status bar text

            squares.forEach((sq)=>
            //prevents from continuing after one side wins
            {
              if (sq.innerHTML == "")
              {
                sq.innerHTML = " ";
              }
            });
          }
    
    ``});
    });

  }); 

  






};