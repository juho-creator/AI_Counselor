/* 로그인 페이지 (Login Page) */


// 오류 변수 초기화 (Initialize error letiable)
let error = false;
let lang =  window.localStorage.getItem("language");



// 언어별 로그인 정보를 표시하는 함수 실행

function displayLoginInfo ()
{
    // English
    if (lang === "en") {
        document.getElementById("email").placeholder = "Email";
        document.getElementById("password").placeholder = "Password";
        document.getElementsByTagName("button")[0].innerText = "Continue";
    }
    // Korean
    else if (lang === "ko") {
        document.getElementById("email").placeholder = "이메일";
        document.getElementById("password").placeholder = "비밀번호";
        document.getElementsByTagName("button")[0].innerText = "계속하기";
    }   
};




// 로그인 설정 함수 (Setup function for login)
const setup = () => {
    // 이메일과 비밀번호 가져오기 (Retrieve email and password)
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    // English
    if (lang === "en") {
        // Email validation
        if (email.includes("@") === false || email === "") {
            document.getElementById("email").value = "";
            document.getElementById("email").placeholder = "Invalid email";
            error = true;
        }

        // Password validation
        if (password.length < 8) {
            document.getElementById("password").value = "";
            document.getElementById("password").placeholder = "Invalid password";
            error = true;
        }

        // Display alert if there are errors
        if (error === true) {
            alert("Invalid email or password.\n📧 Email must contain the @ symbol.\n🔒 Password must be at least 8 characters long.");
        } 
    }


    // Korean
       else if (lang === "ko") {
        // 이메일 유효성 검사 (Email validation)
        if (email.includes("@") === false || email === "") {
            document.getElementById("email").value = "";
            document.getElementById("email").placeholder = "유효하지 않은 이메일";
            error = true;
        }

        // 비밀번호 유효성 검사 (Password validation)
        if (password.length < 8) {
            document.getElementById("password").value = "";
            document.getElementById("password").placeholder = "유효하지 않은 비밀번호";
            error = true;
        }

        // 오류가 있는 경우 알림 표시 (Display alert if there are errors)
        if (error === true) {
            alert("유효하지 않은 이메일이나 비밀번호입니다.\n📧 이메일은 @을 포함해야 합니다.\n🔒 비밀번호는 적어도 8자 이상이어야 합니다.");
        } 
    }

   
    // 오류가 없는 경우 MBTI 페이지로 이동 (Redirect to MBTI page if there are no errors)
    if (error === false) {
        window.location.href = `../Login_Page/mbti.html`;
    }

    // 오류 변수 초기화 (Reset error letiable)
    error = false;
};
