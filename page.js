window.onload=function(){
    // 照片选项卡
    let num=document.querySelectorAll(".num ul li");
    let son=document.querySelectorAll("main ul");
    console.log(num,son);
    for(let i=0;i<num.length;i++){
        num[i].onclick=function () {
            for(let j=0;j<num.length;j++){
                son[j].style.display="none";
                num[j].classList.remove("active");
            }
            son[i].style.display="block";
            num[i].classList.add("active");
        }
    }
}