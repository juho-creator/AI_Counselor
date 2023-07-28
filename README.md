# Why do we need an AI Counselor?
In the modern era, mental health is not taken seriously. Society stigmatizes those taking any form of mental health care services as mentally weak individuals.
Unfortunately, this has prevented many from seeking help, deteriorating their quality of life, and in extreme cases, causing them to end their own life.

I think the following are the main reasons why those in need do not ask for help :
1. **Lack of privacy** : People don't feel comfortable sharing personal issues with a counselor. 
2. **Unable to afford counseling service**: Counseling service is not available within their region, or very costly.
3. **Not enough time** : People don't have spare time to get counseling service at certain time of the day.
4. **Lack of Awareness on mental health** : Mental health is underestimated and not given enough attention from people.

Fortunately with the use of AI, I was able to come up with a possible solution to problems mentioned above. 
I'm very excited to announce a personal AI counselor, Emily.
Emily offers AI counseling service 24/7 for anyone, anywhere in the world with internet connection.

Here's how Emily could help people going through hard times :
1. **Offers more private space** : Users could feel more comfortable expressing their feelings without having to talk to another person.
2. **More affordable** : AI counseling service is relatively cheaper than counseling service from counselors
3. **Service available anytime** : The service is available 24/7 as long as there's no issue in the server
4. **Raise awareness of mental health issues** : AI counselor can educate users on mental health, and positive mindsets to help address mental health issues depending on the users personal needs.

In order to give our user a more personalized experience, we ask user for their MBTI and use their personality traits to match the best AI counselor.



# Concerns

Although Emily sounds like a flawless AI counselor, the following problems are unavoidable and must be taken into consideration :

1. **Privacy issues**

User's privacy is extremely important to our service. However, new AI technologies has made it easier for hackers to attack the server with different ways.
It would be very challenging to prevent every possible attacks, but we could always check our server regularly to reduce flaws in our 
cybersecurity.

2.  **Hallucination**

To this day (27th July  2023), chatgpt could still experience hallucination, informing users unverified information and possibly misguiding them. Inorder to address the issue, it is crucial for us to set strict guard rails via prompt engineering to train it to not say things that
it is not sure about. And we need regular RLHF(Reinforcement Learning from Human Feedback) based on response review from users and psychologist for improving response of our AI counselor.



# Training the counselor
We're creating 16 different AI counselors for each MBTI`s via prompt engineering. And here's how we'll do it :

**Prompt1** (Assigning chatgpt role to learn information that I'll provide.)

난 지금부터 너를 [INFP] 성격 유형을 가진 환자를  심리상담해주는 심리상담사로 훈련시킬꺼야. 이 시점 이후로 부터 계속 너가 [INFP]에 관해 깊게 이해할수 있도록 [INFP]에 관한 정보를 계속 줄꺼야. 넌 그걸 계속 학습,이해한 것을 "무조건 한문장"으로 대답하고, 난 이어서 정보를 주고 그걸 계속 반복할꺼야. 지금부터 훈련을 시작하기 앞서 너의 의무를 한문장으로 설명하고 시작하자.



**Prompt2**  (Training Chatgpt on information from other websites)

https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj (한국어)
https://www.16personalities.com/intj-personality (영어)


**Final Prompt** (Assigning role to Chatgpt) 

[INFP]에 관한 정보는 일단 여기까지 하자.  너가 학습한 정보를 정리해서 전부 말해줘. 그런후 최종적으로 [INFP] AI심리상담자로서 너가 어떻게 [INFP]가 성장할수 있도록 도와줄것인지 설명해봐.

