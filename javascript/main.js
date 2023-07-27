var isEnglish = true



// Get the "login" element by its ID
const signupElement  = () =>
{
    window.location.href = "signup.html";    
}

    
const ChangeLanguage = () =>
{    
    if(isEnglish === true)
    {
        document.getElementById("title").innerText = "AI 심리 상담사"
        document.getElementById("title").style = "font-size:30px;"

        document.getElementById("name").innerText = "에밀리입니다."
        document.getElementById("login").innerText = "로그인"
        document.getElementById("signup").innerText = "회원가입"
        isEnglish = false;
    }

    else if (isEnglish === false)
    {
        document.getElementById("title").innerText = "Introducing your AI counselor"
        document.getElementById("title").style = "font-size:16px;"
 
        document.getElementById("name").innerText = "Emily 😀"
        document.getElementById("login").innerText = "login"
        document.getElementById("signup").innerText = "signup"
        isEnglish = true;
    }

}




const loginElement = () =>
{
    window.location.href = "login.html";

}