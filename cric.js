      var scr1 = [];
      var tot1;
      var ballcount = 0;
      var plycount = 5;
      var team1 = () => {
        if (ballcount == 18 || plycount == 0) {
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
      var plycount2 = 5;
      var team2 = () => {
        if (ballcount2 == 18 || plycount2 == 0) {
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
      var a=localStorage.getItem("team1Score");
      var b=localStorage.getItem("team2Score");
      var report= ()=>{
        if(a>b){
            alert("Team1 won the match");
        }
        else if(b>a){
          alert("Team2 won the match");
        }
        else if(a==b){
            alert("Match drawn");
        }
    }


