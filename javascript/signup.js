/* 회원가입 페이지 스크립트 (Signup Page Script) */

// 전화번호 입력란으로 포커스 이동 함수 (Function to move focus to the phone number input fields)
const moveFocus1 = () => {
    var p1 = document.getElementById("p1").value;
    if (p1.length === 3) {
        document.getElementById("p2").focus();
    }
}

const moveFocus2 = () => {
    var p2 = document.getElementById("p2").value;
    if (p2.length === 4) {
        document.getElementById("p3").focus();
    }
}

// 버튼 활성화 함수 (Function to enable buttons)
const enableButtons = () => {
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;

    if (p1.length === 3 && p2.length === 4 && p3.length === 4) {
        // 활성화된 버튼 (Enable buttons)
        const button1 = document.getElementById("send-button");
        button1.disabled = false;
        button1.style = "background: white; color: blue;";
    }
}

// 인증번호 전송 함수 (Function to send verification code)
const sendCode = () => {
    // 인증번호 생성 (Generate verification code)
    document.getElementById("code").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    // 전송 버튼 비활성화 (Disable send button)
    document.getElementById("send-button").disabled = true;
    document.getElementById("send-button").style = "";

    // 인증 확인 버튼 활성화 (Enable verify button)
    document.getElementById("verify-button").disabled = false;
    document.getElementById("verify-button").style = "background: blue; color: white;";

    // 타이머 시작 (Start timer)
    getTokenTimer();
}

let interval;

// 타이머 함수 (Timer function)
const getTokenTimer = () => {
    let time = 5;
    interval = setInterval(function () {
        if (time >= 0) {
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0");
            document.getElementById("time").innerText = min + ":" + sec;
            time = time - 1;
        } else {
            // 인증 코드 초기화 (Reset verification code)
            document.getElementById("code").innerText = "000000";

            // 버튼 비활성화 (Disable buttons)
            document.getElementById("send-button").disabled = true;
            document.getElementById("send-button").style = "";

            document.getElementById("verify-button").disabled = true;
            document.getElementById("verify-button").style = "";

            // 타이머 초기화 (Reset timer)
            document.getElementById("time").innerText = "3:00";
            clearInterval(interval);
        }
    }, 1000);
}

// 인증 확인 함수 (Function to confirm verification)
const confirm = () => {
    // 인증 완료 메시지 (Verification completed message)
    alert("인증이 완료되었습니다.");

    // 인증 확인 버튼 비활성화 (Disable verify button)
    document.getElementById("verify-button").disabled = true;
    document.getElementById("verify-button").style = "";

    // 버튼 텍스트 변경 (Change button text)
    document.getElementById("verify-button").innerText = "인증완료";

    // 가입하기 버튼 활성화 (Enable signup button)
    document.getElementById("reg-button").style = "border: 1px solid blue; color: blue; background: white;";
    document.getElementById("reg-button").disabled = false;
}

// 가입 정보 확인 함수 (Function to check registration information)
const check = () => {
    let isValid = true;

    // 이메일 확인 (Email validation)
    var email = document.getElementById("email").value;
    if (email.includes("@") === false) {
        isValid = false;
        document.getElementById("email-error").innerText = "이메일이 올바르지 않습니다.";
    } else {
        document.getElementById("email-error").innerText = "";
    }

    // 이름 확인 (Name validation)
    var name = document.getElementById("name").value;
    if (name === "") {
        isValid = false;
        document.getElementById("name-error").innerText = "이름이 올바르지 않습니다.";
    } else {
        document.getElementById("name-error").innerText = "";
    }

    // 비밀번호 확인 (Password validation)
    var password = document.getElementById("pswd").value;
    if (password === "") {
        isValid = false;
        document.getElementById("pswd-error").innerText = "비밀번호가 올바르지 않습니다.";
    } else {
        document.getElementById("pswd-error").innerText = "";
    }

    // 비밀번호 일치 확인 (Password match validation)
    var re_password = document.getElementById("re_pswd").value;
    if (re_password === "") {
        document.getElementById("re-pswd-error").innerText = "비밀번호가 올바르지 않습니다.";
        isValid = false;
    } else {
        document.getElementById("re-pswd-error").innerText = "";
    }

    if (password !== re_password) {
        isValid = false;
        document.getElementById("re-pswd-error").innerText = "비밀번호가 일치하지 않습니다.";
    }

    // 지역 선택 확인 (Location selection validation)
    var location = document.getElementById("navigation").value;
    if (location !== "서울" && location !== "경기" && location !== "인천") {
        isValid = false;
        document.getElementById("location-error").innerText = "지역을 선택해 주세요.";
    } else {
        document.getElementById("location-error").innerText = "";
    }

    // 성별 선택 확인 (Gender selection validation)
    var woman = document.getElementById("woman_button").checked;
    var man = document.getElementById("man_button").checked;

    if (man === false && woman === false) {
        isValid = false;
        document.getElementById("gender-error").innerText = "성별을 선택 해주세요.";
    } else {
        document.getElementById("gender-error").innerText = "";
    }

    // 출력 (Display)
    if (isValid === true) {
        alert("코드캠프 가입을 축하합니다.🥳");
    }
}
