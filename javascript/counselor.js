/* Loading Page*/

// Retrieve the MBTI type from the URL parameter
function getMBTITypeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('mbti');
}

// Display the counselor's information based on the MBTI type
function displayCounselorInfo(mbtiType) {

    // Retrieve counselor information based on the MBTI type
    const counselorData = {
      ISTJ: {
        name: "George Washington",
        description: "George Washington is an experienced counselor for ISTJ individuals...",
      },
      ISFJ: {
        name: "Mother Teresa",
        description: "Mother Teresa specializes in counseling ISFJ individuals...",
      },
      INFJ: {
        name: "Nelson Mandela",
        description: "Nelson Mandela has expertise in counseling INFJ individuals...",
      },
      INTJ: {
        name: "Elon Musk",
        description: "Elon Musk provides counseling for INTJ individuals...",
      },
      ISTP: {
        name: "Clint Eastwood",
        description: "Clint Eastwood offers guidance to ISTP individuals...",
      },
      ISFP: {
        name: "Bob Ross",
        description: "Bob Ross focuses on counseling ISFP individuals...",
      },
      INFP: {
        name: "William Shakespeare",
        description: "William Shakespeare provides support to INFP individuals...",
      },
      INTP: {
        name: "Albert Einstein",
        description: "Albert Einstein is specialized in counseling INTP individuals...",
      },
      ESTP: {
        name: "Madonna",
        description: "Madonna is experienced in counseling ESTP individuals...",
      },
      ESFP: {
        name: "Marilyn Monroe",
        description: "Marilyn Monroe connects well with ESFP individuals...",
      },
      ENFP: {
        name: "Robin Williams",
        description: "Robin Williams empowers and motivates ENFP individuals...",
      },
      ENTP: {
        name: "Thomas Edison",
        description: "Thomas Edison offers counseling for ENTP individuals...",
      },
      ESTJ: {
        name: "John D. Rockefeller",
        description: "John D. Rockefeller provides guidance to ESTJ individuals...",
      },
      ESFJ: {
        name: "Taylor Swift",
        description: "Taylor Swift assists ESFJ individuals in their journey...",
      },
      ENFJ: {
        name: "Oprah Winfrey",
        description: "Oprah Winfrey is passionate about counseling ENFJ individuals...",
      },
      ENTJ: {
        name: "Steve Jobs",
        description: "Steve Jobs provides support and direction to ENTJ individuals...",
      },
    };
    


    // Retrieve the counselor's information for the given MBTI type
    const counselorInfo = counselorData[mbtiType];

    // Update the counselor.html elements with the counselor's information
    document.getElementById('counselor-name').textContent = counselorInfo.name;
    document.getElementById('counselor-description').textContent = counselorInfo.description;
   
   
    // document.getElementById('talk-button').innerText = `Talk with ${counselorInfo.name}`;
    // document.getElementById('talk-button').innerText = "Start talking"

    
    // Update other counselor information elements here
}

let interval

const getTokenTimer = (mbtiType) =>
{
    let time = 3
    interval = setInterval(function () {
        if (time >= 0) {
            
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0");
            document.getElementById("time").innerText= min + ":" + sec;
            time = time - 1

        }

        // When time is over
        else
        {
      
            // Reset time to 3:00
            document.getElementById("time").innerText="3:00"
           
            window.location.href = `counselor.html?counselor=${mbtiType}`;
            // Clear time
            clearInterval(interval)


          }

    }, 1000)

}





/*Counselor page*/
// Replace 'YOUR_API_KEY' with your actual ChatGPT API key
const apiKey = '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';
const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

// Function to send user message to the API
async function sendMessage() {
  const userInput = document.getElementById('user-input').value.trim();

  if (userInput === '') return;

  displayMessage('user', userInput);
  document.getElementById('user-input').value = '';

  // The system message with the assigned role using template literals
  const systemMessage = `
    As a counselor for INTJ patients, your approach should be warm, understanding, and sympathetic. 
    Engage in active listening and show genuine empathy towards their thoughts and feelings. 
    Avoid robotic language or overly technical explanations. Instead, use words and phrases that convey compassion and a human touch.

    Remember to acknowledge the INTJ's analytical nature and respect their need for logic and clarity. 
    Encourage them to express their thoughts and ideas freely while providing a non-judgmental and safe space to explore their emotions.

    Use open-ended questions to prompt deeper introspection and encourage them to share their experiences openly. 
    Validate their concerns and accomplishments, and offer encouragement for their personal growth.

    Above all, prioritize building a strong rapport with the INTJ patients, allowing them to feel understood, accepted, and supported throughout the therapy session.
  `;

  try {
    const response = await axios.post(apiEndpoint, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: userInput,
        },
        {
          role: 'system',
          content: systemMessage,
        },
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const botReply = response.data.choices[0].message.content;
    displayMessage('bot', botReply);
  } catch (error) {
    console.error('Error:', error.message);
    displayMessage('bot', 'Oops! Something went wrong. Please try again.');
  }
}

// Function to display messages in the chat container
function displayMessage(role, content) {
    const chatDisplay = document.getElementById('chat-display');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(role === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = content;
    chatDisplay.appendChild(messageDiv);
}
