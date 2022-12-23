//1. import DOM

//3. get recent time


//2. when page is loaded run the clock - need a fuction

document.addEventListener('DOMContentLoaded', function() {
        const clockRun = () => {
          
          
          
          let hrhand = document.getElementById('hour');
          let minhand = document.getElementById('minute');
          let secondhand = document.getElementById('second');
        
          let now = new Date();
          let hr = now.getHours();
          let min = now.getMinutes();
          let sec = now.getSeconds();
          
          //get rotation angles
          let secAngle = sec * 6;
          let minAngle = (min *6) + (sec * 6/360);
          let hrAngle = (hr * 30)+ (1/2 * min)
          
          //setting up angle value
        let secAngleValue = "rotate(" + secAngle + "deg)";
        let minAngleValue = "rotate(" + minAngle + "deg)";
        let hrAngleValue = "rotate(" + hrAngle + "deg)";
        
        //css add
        
        secondhand.style.transform = secAngleValue;
        minhand.style.transform = minAngleValue;
        hrhand.style.transform = hrAngleValue;
      }
      
        clockRun();
        setInterval(clockRun, 1000);
        
      })
    
      //4. need to rotate needles by 1sec each (12degree)
//5. calculate rotate degree
//6. 