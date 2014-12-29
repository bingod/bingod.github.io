 $(document).ready(function(){
                $("ul li:gt(10)").hide();//初始化，前面4条数据显示，其他的数据隐藏。
                var total_q=$("ul li").index()+1;//总数据
                var current_page=10;//每页显示的数据
                var current_num=1;//当前页数
                var total_page= Math.round(total_q/current_page)+1;//总页数  
                var next=$(".next");//下一页
                var prev=$(".prev");//上一页
                $(".total").text(total_page);//显示总页数
                $(".current_page").text(current_num);//当前的页数
                
                //下一页
                $(".next").click(function(){
                    if(current_num==total_page){
                            return false;//如果大于总页数就禁用下一页
                        }
                        else{
                            $(".current_page").text(++current_num);//点击下一页的时候当前页数的值就加1
                            $.each($('ul li'),function(index,item){
                                var start = current_page* (current_num-1);//起始范围
                                var end = current_page * current_num;//结束范围
                                if(index >= start && index < end){//如果索引值是在start和end之间的元素就显示，否则就隐
                                    $(this).show();
                                }else {
                                    $(this).hide();
                                }
                            });
                        }
                });
                //上一页方法
                $(".prev").click(function(){
                        if(current_num==1){
                            return false;
                        }else{
                            $(".current_page").text(--current_num);
                            $.each($('ul li'),function(index,item){
                                var start = current_page* (current_num-1);//起始范围
                                var end = current_page * current_num;//结束范围
                                if(index >= start && index < end){//如果索引值是在start和end之间的元素就显示，否则就隐藏
                                    $(this).show();
                                }else {
                                    $(this).hide();
                                }
                            });     
                        }
                         
                    })
        })
