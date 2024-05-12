const container=document.getElementById('container');
const registerBtn=document.getElementById('register');
const loginBtn=document.getElementById('login');


registerBtn.addEventListener('click',()=>{
    container.classList.add('active');

});

loginBtn.addEventListener('click',()=>{
    
    container.classList.remove('active');
    const pass=document.getElementById('password').value;
    const email=document.getElementById('email').value;

    if(pass=='1234' &&email== 'admin@container.com'){
        location.replace('file:///home/kali/Documents/project/web/progect0managment/goods/ibra.html');
    }
});
