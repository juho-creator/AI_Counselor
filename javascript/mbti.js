let lang =  window.localStorage.getItem("language");




function displayMBTIInfo() {
    // Korean
    if (lang === "ko") {
        document.getElementById("askmbti").innerText = "당신의 MBTI가 무엇입니까?";
        document.getElementById("mbti").placeholder = "MBTI를 입력해주세요";
        document.getElementById("next_button").innerText = "다음";
        document.querySelector(".findMbti").innerHTML = '<a href="https://www.16personalities.com/free-personality-test">여기</a>를 눌러 MBTI 테스트를 수행하세요';
    }
    
    // English
    else if (lang === "en") {
        document.getElementById("askmbti").innerText = "What's your MBTI?";
        document.getElementById("mbti").placeholder = "Type in your MBTI";
        document.getElementById("next_button").innerText = "Next";
        document.querySelector(".findMbti").innerHTML = 'Click <a href="https://www.16personalities.com/free-personality-test">here</a> to take the MBTI test';
    }

    // Chinese
    else if (lang === "zh") {
        document.getElementById("askmbti").innerText = "你的MBTI是什么？";
        document.getElementById("mbti").placeholder = "输入你的MBTI类型";
        document.getElementById("next_button").innerText = "下一步";
        document.querySelector(".findMbti").innerHTML = '点击<a href="https://www.16personalities.com/free-personality-test">这里</a>进行MBTI测试';
    }
}


// Function to redirect to counselor.html with the MBTI information
function redirectToCounselor() {
    var mbtiInput = document.getElementById('mbti').value;
    var isValidMbti = isValidMBTI(mbtiInput);

    if (isValidMbti) {
        window.location.href = `counselor_loading.html?mbti=${mbtiInput}`;
    } else {
        if (lang === "en") {
            alert('Invalid MBTI. Please enter a valid 4-letter MBTI type.');
          }

        // Korean
        else if (lang === "ko") {
            alert('유효하지 않은 MBTI입니다. 유효한 4자리 MBTI 유형을 입력하세요.');
        }
        
        // Chinese
        else if (lang === "zh") {
            alert('无效的MBTI。请输入有效的4字母MBTI类型。');
        }
    }
}

// Function to filter input and allow only alphabets
function allowAlphabets(event) {
    var inputElement = document.getElementById('mbti');
    var sanitizedValue = inputElement.value.replace(/[^a-zA-Z]/g, '');
    inputElement.value = sanitizedValue.toUpperCase();
}

// Function to check if the entered value is a valid MBTI
function isValidMBTI(mbti) {
    var validMBTIValues = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];
    return validMBTIValues.includes(mbti.toUpperCase());
}