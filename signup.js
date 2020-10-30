var objPeople = [
    {
        username: "sitanshudevaiah@gmail.com",
        password: "Beyourself@07"
    },
    {
        username: "sitanshudevaiah13@gmail.com",
        password: "BeMyself@007"
    },
    {
        username: "iliketocode29@gmail.com",
        password: "BeMyself29@007"
    },
    {
        username: "sdlovesdanbro@gmail.com",
        password: "12@6_2017"
    }
]

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    for(i = 1; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password)
        {
            window.open("index.html");
            window.close("signup.html")
            return;
        }
    }
    alert("Incorrect username or password.Please try again");
    return;
}