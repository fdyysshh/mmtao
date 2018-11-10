$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    
    mui('.footer').on('tap','a',function(){
        window.top.location.href=this.href;
    });
    

    //    alert(123);
       $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(result){
            
            // console.log(result);
          $('#leftCate').html(template('leftCateTpl',{data:result.rows}));
          
         if(result.rows.length > 0){
            $('#leftCate').find('a:first-child').trigger('click');
            $('#leftCate').find('a:first-child').addClass('active');
         }
        }
    })
   
$('body').on('click','.getSecond',function(){
    var id= $(this).data('id');
     
    $(this).addClass('active').siblings().removeClass('active');
    $.ajax({
        type:"get",
        url:'/category/querySecondCategory',
        data:{
            id:id
        },
        success:function(result){
              var tem=template('rightCateTpl',{data:result.rows});
              $('#rightCate').html(tem);
        }
    })
})
  
   
})