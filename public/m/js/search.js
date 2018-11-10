$(function(){
    $('#searchBtn').on('click',function(){
        var keyword=$('#keyword').val();
        // console.log(keyword);
        if(!keyword){
            alert('请输入关键字');
            return;
        }

        if(localStorage.getItem('keywords')){
            var keywords=JSON.parse(localStorage.getItem('keywords'));
            console.log(keywords);
            keywords.unshift(keyword);

            localStorage.setItem('keywords',JSON.stringify(keywords));
        }else{
            localStorage.setItem('keywords',JSON.stringify([keyword]));
        }

        location.href="search-list.html?key="+keyword;
        $('#keyword').val('');
    });

    if(localStorage.getItem('keywords')){
        var keywords= JSON.parse(localStorage.getItem('keywords'));

        $('#historySearch').html(template('historySearchTpl',{data:keywords}));
    }

    $('#clearHistory').on('click',function(){
        localStorage.removeItem('keywords');
        $('#historySearch').html('');
    })
})