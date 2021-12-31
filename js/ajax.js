  $( '#submit' ).click(function(e){
        e.preventDefault();
        var data={
            email:$('#email').val(),
            nom: $('#nom').val(),
            message: $('#message').val()
        };
        $.ajax({
            url:"mail.php",
            type:'POST ',
            data:data,
            success: function(data) {
                $('#js_alert_success').css({ 'display' :'block'});
                setTimeout(function(){
                        $('#js_alert_success').css({ 'display':'none'});
                        $('#email').val(" ");
                        $('#nom').val(" ");
                        $('#message').val(" ")
                },3000);
            },
            Error:function(data){
                $('#js_alert_danger').css({ 'display' :'block'});
                setTimeout(function(){
                        $('#js_alert_danger').css({ 'display':'none'});
                        $('#email').val(" ");
                        $('#nom').val(" ");
                        $('#message').val(" ")
                },3000);
	
            }
            
        });
     });