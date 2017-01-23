var myRover = {
  position: [0,0], 
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
     };
  }
  
function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
     };
  }
  
function turnRight(rover){
    switch(rover.direction){
        case 'N':
            rover.direction = 'E'
            break;
        case 'E':
            rover.direction = 'S'
            break;
        case 'S':
            rover.direction = 'W'
            break;
        case 'W':
            rover.direction = 'N'
            break;
    };
}

function turnLeft(rover){
    switch(rover.direction){
        case 'N':
            rover.direction = 'W'
            break;
        case 'W':
            rover.direction = 'S'
            break;
        case 'S':
            rover.direction = 'E'
            break;
        case 'E':
            rover.direction = 'N'
            break;
    };
}

var directions = prompt('Enter directions for the Rovers: ');

for(var i = 0; i <= directions.length; i ++)
    if (directions[i] === "f"){
        goForward(myRover);
    }
    else if (directions[i] === "b"){
        goBackwards(myRover);
    }
    else if (directions[i] === "r"){
        turnRight(myRover);
    }
    else if (directions[i] === "l"){
        turnLeft(myRover);
    }
    else {
        console.log("Please enter correct directions")
    }

if (myRover.position[0] > 10){
    myRover.position[0] -=10;
}
else if (myRover.position[0] < 0){
    myRover.position[0] += 10;
}

if (myRover.position[1] > 10){
    myRover.position[1] -=10;
}
else if (myRover.position[1] < 0){
    myRover.position[1] += 10;
}



  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")


goForward(myRover);