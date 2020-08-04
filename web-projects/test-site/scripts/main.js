let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images\firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images\firefox-icon.png');
    }
}
alert("你好");
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

myButton.onclick=function(){
    setUserName();
}
function setUserName(){
    let myName=prompt('请输入你的名字。');
    localStorage.setItem('name',myName);
    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        myHeading.textContent='Mozilla 酷毙了，'+myName;
    }
}


