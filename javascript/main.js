/* 메인 페이지 (Main Page) */

// 회원가입 페이지로 이동 (Redirect to the signup page)
const signupElement = () => {
  window.location.href = `signup.html`;
};

// 로그인 페이지로 이동 (Redirect to the login page)
const loginElement = () => {
  window.location.href = `login.html`;
};

// Variable to track the visibility of the language container
let languageContainerVisible = false;

// Function to handle the click on the globe icon
function toggleLanguageContainer() {
  // Toggle the visibility of the language container
  languageContainerVisible = !languageContainerVisible;

  // Get a reference to the language container element
  const languageContainer = document.getElementById("language-container");

  // Update the display property based on the visibility status
  languageContainer.style.display = languageContainerVisible ? "block" : "none";
}

// Function to handle language selection
function selectLanguage(lang) {
  // 한국어로 설정 (Set to Korean)
  if (lang === "ko") {
    document.getElementById("title").innerText = "AI 심리 상담사";
    document.getElementById("title").style = "font-size: 30px;";
  
    document.getElementById("name").innerText = "에밀리입니다.";
    document.getElementById("login").innerText = "로그인";
    document.getElementById("signup").innerText = "회원가입";
  
    // 영어로 설정 (Set to English)
  } else if (lang === "en") {
    document.getElementById("title").innerText =
      "Introducing your AI counselor";
    document.getElementById("title").style = "font-size: 16px;";
  
    document.getElementById("name").innerText = "Emily 😀";
    document.getElementById("login").innerText = "login";
    document.getElementById("signup").innerText = "signup";
  
    // 设置为中文 (Set to Chinese)
  } else if (lang === "zh") {
    document.getElementById("title").innerText = "介绍您的AI顾问";
    document.getElementById("title").style = "font-size: 16px;";
  
    document.getElementById("name").innerText = "艾米莉 😀";
    document.getElementById("login").innerText = "登录";
    document.getElementById("signup").innerText = "注册";
  }
  

  // Hide the language container after selecting a language
  toggleLanguageContainer();

  // Store language settings in "language"
  window.localStorage.setItem("language", lang);
}
