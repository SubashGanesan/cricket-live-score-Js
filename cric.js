      var scr1 = [];
      var tot1;
      var ballcount = 0;
      var plycount = 10;
      var team1 = () => {
        if (ballcount == 60 || plycount == 0) {
          console.log(tot1);
          document.getElementById("display1").innerText(tot1);
          return scr1;
        } else {
          ballcount++;
          var btn1 = Math.floor(Math.random() * 7 + 0);
          scr1.push(btn1);
          if (btn1 == 0) {
            plycount--;
          }
          tot1 = scr1.reduce((total, currentvalue) => {
            return total + currentvalue;
          }, 0);
        }
      };
      console.log(scr1);

      var scr2 = [];
      var tot2;
      var ballcount2 = 0;
      var plycount2 = 10;
      var team2 = () => {
        if (ballcount2 == 60 || plycount2 == 0) {
          console.log(tot2);
          return scr2;
        } else {
          ballcount2++;
          var btn2 = Math.floor(Math.random() * 7 + 0);
          scr2.push(btn2);
        }
        if (btn2 == 0) {
          plycount2--;
        }
        tot2 = scr2.reduce((total, currentvalue) => {
          return total + currentvalue;
        }, 0);
      };
      console.log(scr2);
      

