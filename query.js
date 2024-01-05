$(document).ready(function(){
    $("#mail").click(function(){
    if($("#name").val() != ""){
        if($("#email").val() != ""){
            if($("#subject").val() != ""){
            if($("#message").val() != ""){

                $.post("http://autoloadctrl.42web.io/mail.php",
                {
                  name: $("#name").val(),
                  email: $("#email").val(),
                  subject: $("#subject").val(),
                  message: $("#message").val(),


                },
                function(data,status){
                  alert("Data: " + data + "\nStatus: " + status);
                });
                
            alert("Message sent successfully, We will get back to you");
            }
            else alert("Pls enter your message!!!");  
        }
          else alert("Pls enter the title or subject of your message!!!");  
        }
        else alert("Pls enter your mail address!!!");
    }
    else alert("Pls enter your name!!!");

    });
  });