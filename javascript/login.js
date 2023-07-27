/* 로그인 페이지 (Login Page) */

// 오류 변수 초기화 (Initialize error variable)
var error = false;

// 로그인 설정 함수 (Setup function for login)
const setup = () => {
    // 이메일과 비밀번호 가져오기 (Retrieve email and password)
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

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

    // 오류가 없는 경우 MBTI 페이지로 이동 (Redirect to MBTI page if there are no errors)
    if (error === false) {
        window.location.href = "../Login_Page/mbti.html";
    }

    // 오류 변수 초기화 (Reset error variable)
    error = false;
};
