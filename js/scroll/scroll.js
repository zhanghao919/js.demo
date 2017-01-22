function $(id){return document.getElementById(id);}
function show(id){
    $(id).style.display = 'block';
}

function hide(id){
    $(id).style.display = 'none';
}
function scroll(){
        if(window.pageYOffset != null){  //ie9+
            return {
                left:window.pageXOffset,
                top:window.pageYOffset
            }
        }else if(document.compatMode == "CSS1Compat" ){  
        //CSS1Compat有文档声明，标准模式
            return {
                left:document.documentElement.scrollLeft,
                top :document.documentElement.scrollTop
            }
        }else{  //剩下的就是怪异模式,没有文档声明的
            return {
                left:document.body.scrollLeft,
                top:document.body.scrollTop
            }
        }
}