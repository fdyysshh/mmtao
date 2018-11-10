var userinfo=null
  //查询个人信息
 $.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    async:false,
    success:function(res){
        console.log(res)
        if(res.error===400){
           mui.toast('未登入')
           setTimeout(function(){
               location.href="login.html"
           },2000)
        }
        userinfo=res
    }
})


$(function(){
    $('.out').on('click',function(){
        // alert('hh')
        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(res){
                //  console.log(res)
                if(res.success){
                    location.href="index.html"
                }
               
            }
        })
    })

  
    var html=template('userTpl',{userinfo})
   console.log(html)
   $('#user-box').html(html)
})