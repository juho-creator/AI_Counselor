const moveFocus1 = () =>
{
    var p1 = document.getElementById("p1").value;
    if(p1.length === 3)
    {
        document.getElementById("p2").focus();
    }
}


const moveFocus2 = () =>
{
    var p2 = document.getElementById("p2").value;
    if(p2.length === 4)
    {
        document.getElementById("p3").focus();
    }
}


const enableButtons = () =>
{
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;


    if (p1.length === 3 && p2.length === 4 && p3.length === 4)
    {
        //Enable button
        const button1 = document.getElementById("send-button"); 
        button1.disabled = false;
        button1.style = "background: white; color : blue;" 
    }
}


const sendCode = () =>
{    
    // Generate code
    document.getElementById("code").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");


    // Disable send button
    document.getElementById("send-button").disabled = true;
    document.getElementById("send-button").style = "";
    
    
    // Enable verify button
    document.getElementById("verify-button").disabled = false;
    document.getElementById("verify-button").style = "background: blue; color : white;";

    
    // Start timer
    getTokenTimer();
}

   

let interval

const getTokenTimer = () =>
{
    let time = 5
    interval = setInterval(function () {
        if (time >= 0) {
            
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0");
            document.getElementById("time").innerText= min + ":" + sec;
            time = time - 1

        }
        else
        {
            // Reset code to zero
            document.getElementById("code").innerText = "000000";

            //  Disable buttons
            document.getElementById("send-button").disabled=true;
            document.getElementById("send-button").style="";

            document.getElementById("verify-button").disabled=true;
            document.getElementById("verify-button").style="";



            // Reset time to 3:00
            document.getElementById("time").innerText="3:00"
           

            // Clear time
            clearInterval(interval)
        }

    }, 1000)

}

const confirm = () =>
{ 
    // Pop up message 
    alert("인증이 완료되었습니다.")

    // Disable verify-button
    document.getElementById("verify-button").disabled = true
    document.getElementById("verify-button").style = ""


    // set button text as verified
    document.getElementById("verify-button").innerText = "인증완료" 


    // Enable signup button
    document.getElementById("reg-button").style = "border : 1px solid   blue; color: blue; background : white;";
    document.getElementById("reg-button").disabled = false

}

const check = () =>
{
    let isValid = true;

    // 이메일 @ 있는지 확인
    var email = document.getElementById("email").value
    if (email.includes("@")===false)
    {
        isValid = false 
        document.getElementById("email-error").innerText = "이메일이 올바르지 않습니다."
    }
    else
    {
        document.getElementById("email-error").innerText =""
    }

    // 이름 확인
    var name = document.getElementById("name").value
    if (name === "")
    {
        isValid = false 
        document.getElementById("name-error").innerText = "이름이 올바르지 않습니다."
    }
    else
    {
        document.getElementById("name-error").innerText = ""
    }



    //비밀번호 확인
    var password = document.getElementById("pswd").value
    if (password === "")
    {
        isValid = false 
        document.getElementById("pswd-error").innerText = "비밀번호가 올바르지 않습니다."
    }
    else
    {
        document.getElementById("pswd-error").innerText = ""
    }

    // 비밀번호 일치하는지 확인
    var re_password = document.getElementById("re_pswd").value


    if (re_password === "")
    {
        document.getElementById("re-pswd-error").innerText = "비밀번호가 올바르지 않습니다."
        isValid = false 
        document.getElementById("re-pswd-error").innerText = "비밀번호가 올바르지 않습니다."
    }
    else
    {
        document.getElementById("re-pswd-error").innerText = ""
    }

    if (password !== re_password)
    {
        isValid = false 
        document.getElementById("re-pswd-error").innerText = "비밀번호가 일치하지 않습니다."
    }
   


    // 지역 선택 여부 확인
    var location = document.getElementById("navigation").value
    if (location !=="서울" && location !=="경기" && location !=="인천")
    {
        isValid = false 
        document.getElementById("location-error").innerText = "지역을 선택해 주세요."
    }
    else
    {
        document.getElementById("location-error").innerText = ""
    }




    // 성별 선택 여부 확인
    var woman = document.getElementById("woman_button").checked
    var man = document.getElementById("man_button").checked


    if (man === false && woman === false)
    {
        isValid = false;
        document.getElementById("gender-error").innerText = "성별을 선택 해주세요."
    }
    else
    {
        document.getElementById("gender-error").innerText = ""
    }


    //출력
    if (isValid === true)
    {    
        alert("코드캠프 가입을 축하합니다.🥳");
    }
}