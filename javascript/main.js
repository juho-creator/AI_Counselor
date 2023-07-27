/* 메인 페이지 (Main Page) */

// 언어 설정 변수 (Language setting variable)
var isEnglish = true;

// 회원가입 페이지로 이동 (Redirect to the signup page)
const signupElement = () => {
    window.location.href = "signup.html";
}

// 언어 변경 함수 (Function to change language)
const ChangeLanguage = () => {
    if (isEnglish === true) {
        // 한국어로 설정 (Set to Korean)
        document.getElementById("title").innerText = "AI 심리 상담사";
        document.getElementById("title").style = "font-size: 30px;";

        document.getElementById("name").innerText = "에밀리입니다.";
        document.getElementById("login").innerText = "로그인";
        document.getElementById("signup").innerText = "회원가입";
        isEnglish = false;
    } else if (isEnglish === false) {
        // 영어로 설정 (Set to English)
        document.getElementById("title").innerText = "Introducing your AI counselor";
        document.getElementById("title").style = "font-size: 16px;";

        document.getElementById("name").innerText = "Emily 😀";
        document.getElementById("login").innerText = "login";
        document.getElementById("signup").innerText = "signup";
        isEnglish = true;
    }
}

// 로그인 페이지로 이동 (Redirect to the login page)
const loginElement = () => {
    window.location.href = "login.html";
}
