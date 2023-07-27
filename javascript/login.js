var error = false


const setup = () =>
{
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value


 


    if (email.includes("@") === false || email === "")
    {
        document.getElementById("email").value = ""
        document.getElementById("email").placeholder="Invalid email"
        error = true         
    }

    

    if (password.length < 8)
    {  
        document.getElementById("password").value = ""
        document.getElementById("password").placeholder="Invalid password"
        error = true
    }

    if (error === true)
    {
        alert("Invalid email or password\n📧email should include @\n🔒password must contain at least 8 characters")
    }


    if(error === false)
    {
        window.location.href = "../Login_Page/mbti.html";
    }

    error = false
}   