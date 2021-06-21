function send(){
    robot1_name =document.getElementById("robot 1").value;
    robot2_name =document.getElementById("robot 2").value;
    localStorage.setItem("robot1_name",robot1_name);
    localStorage.setItem("robot2_name",robot2_name);
    window.location="game_page.html"
    
    }