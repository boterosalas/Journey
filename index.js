window.addEventListener('load',function(){
    var post = document.getElementById('post');
    function fPost(){
        let reqpost = new XMLHttpRequest();
        let url = "https://script.google.com/macros/s/AKfycbwQTuVlfhafV_RVg5wG0mrWyqJQcA_cnjyS9DGwHyy6CtPpwh-W/exec";
        let idUser = document.getElementById('idUser').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        reqpost.open("POST",url,true);
        reqpost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        reqpost.send("idUser="+idUser+"&name="+name+"&email="+email);
    }
    post.addEventListener('click',fPost);
})