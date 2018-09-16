window.onload=function () {
    let user=document.getElementsByClassName("username")[0];
    // console.log(user);
    let pass=document.getElementsByClassName("password")[0];
    // console.log(pass);

    let close=document.querySelector(".close");
console.log(close);
//获取提交按钮
    let btn=document.querySelector(".logining");
// console.log(btn);
// console.log(close);
    btn.onclick=function(){
        // alert("你正在点击提交按钮");
        // alert(user.value);
        // console.log(user.value,pass.value);
        if(user.value==="2234615709@qq.com" && pass.value==="123456"){
            alert("登录成功");
            window.open("home page.html");
        }else{
            alert("登陆失败，请重新登录");
            user.value="";
            pass.value="";
            // window.open("error.html");
        }
    }
    close.onclick=function(){
        window.open("home page.html");
    }
}

