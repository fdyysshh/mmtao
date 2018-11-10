$(function(){

    $('#login-btn').on('click',function(){
        var username=$('[name="username"]').val()
        var password=$('[name="password"]').val()
        // console.log(username)
        $.ajax({
            url:'/user/login',
            type:'post',
            data:{
                username:username,
                password:password
            },
            success:function(res){
               if(res.success){
                 mui.toast('登入成功')
                 setTimeout(function(){
                    location.href="user.html"
                 },2000)
                   
               }
            }
        })
    })

    
})