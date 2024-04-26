[![English](https://img.shields.io/badge/lang-English-blue.svg)](https://github.com/juho-creator/AI_Counselor/blob/main/README.md)

# 왜 AI 상담사가 필요한가요?
현대 사회에서는 정신 건강의 중요성이 충분히 인식되지 않습니다. 사회는 심리 상담 서비스를 받는 사람들을 정신적으로 약한 개인들로 비난합니다.
불행하게도, 이러한 인식으로 인해 많은 사람들이 도움을 구하지 않고 삶의 질이 저하되고, 극단적인 경우에는 스스로 생명을 끝내는 결과를 초래합니다.

정신적으로 힘든 사람들이 심리 상담을 받지 않는 주요 이유는 다음과 같다고 생각합니다:
1. **개인 정보 보호 부족**: 사람들은 상담사와 개인적인 문제를 나누는 데 불편함을 느낍니다.
2. **상담 서비스 이용불가**: 상담 서비스가 해당 지역에서 이용 불가능하거나 매우 비용이 높습니다.
3. **시간 부족**: 사람들은 특정 시간에 상담 서비스를 받기 위한 여유 시간이 부족합니다.
4. **정신 건강에 대한 인식 부족**: 정신 건강의 중요성이 과소평가되고 충분한 관심을 받지 못합니다.

다행히도 AI의 사용으로 위에서 언급한 문제에 대한 가능한 해결책을 도출할 수 있었습니다.
개인용 AI 상담사 'Emily'를 소개합니다.
Emily는 인터넷 연결이 가능한 **전세계 어디에서나, 24시간, 매일** 이용 가능한 AI 심리 상담 서비스입니다.

Emily는 아래와 같이 기존 심리 상담 서비스보다 개선된 서비스를 제공할 것 입니다:
1. **더 많은 개인 공간 제공**: 환자들은 다른 사람과 이야기하지 않고도 더 편안하게 감정을 표현할 수 있습니다.
2. **저렴한 상담비용**: AI 상담 서비스는 일반적인 상담사보다 비교적 저렴합니다.
3. **언제나 이용 가능한 서비스**: 서버에 문제가 없는 한 24시간 매일 심리 상담을 받을 수 있습니다.
4. **정신 건강 문제에 대한 인식 증진**: Emily는 유저들에 정신 건강에 대해 교육하고 긍정적인 마인드셋을 갖을 수 있도록 교육합니다.


Emily는 개인화된 경험을 제공하기 위해 사용자에게 MBTI를 요청하고 유저의 성격 특성에 맞춘 최적의 AI 상담사를 매칭합니다.


# 우려 사항

Emily는 다음과 같은 문제는 피할 수 없으며 반드시 고려해야 합니다:

1. **개인 정보 보호 문제**

사용자의 개인 정보 보호는 저희 서비스에 있어서 극히 중요합니다. 그러나 새로운 AI 기술로 인해 해커들이 다양한 방법으로 서버를 공격하는 것이 더 쉬워졌습니다.
사이버 공격의 모든 경우의 수를 고려할 순 없지만, 주기적인 서버 점검으로 보안을 개선해 나아갈 수 있습니다.

2. **환각**

현재 (2023년 7월 28일 기준) ChatGPT는 여전히 환각을 경험할 수 있으며, 사용자에게 검증되지 않은 정보를 제공하고 잘못된 방향으로 이끌 수 있습니다.
이 문제에 대응하기 위해 프롬프트 엔지니어링을 통해 엄격한 기준을 설정하여 검증되지 않은 정보를 말하지 않도록 훈련시키는 것이 필수적입니다.
추가적으로 전문가와 유저의 리뷰를 기반으로한 RLHF(인간 피드백 기반 강화학습)를 통해 유저가 개인화된 심리상담 서비스를 경험할 수 있도록 계속 개선해야합니다.

# Chatgpt 훈련시키기
프롬프트 엔지니어링으로 각각의 MBTI별도로 16개의 AI 심리상담사를 구현하고 있습니다. 이런 식으로 할 생각입니다 :

**프롬프트1** (내가 제공하는 정보를 학습할 수 있도록 Chatgpt에게 역할 지정)

난 지금부터 너를 [INFP] 성격 유형을 가진 환자를  심리상담해주는 심리상담사로 훈련시킬꺼야. 이 시점 이후로 부터 계속 너가 [INFP]에 관해 깊게 이해할수 있도록 [INFP]에 관한 정보를 계속 줄꺼야. 넌 그걸 계속 학습,이해한 것을 "무조건 한문장"으로 대답하고, 난 이어서 정보를 주고 그걸 계속 반복할꺼야. 지금부터 훈련을 시작하기 앞서 너의 의무를 한문장으로 설명하고 시작하자.



**프롬프트2**  (웹사이트 정보를 활용하여 Chatgpt 훈련시키기)

https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj (한국어)
https://www.16personalities.com/intj-personality (영어)


**마지막 프롬프트** (Chatgpt에게 심리상담사 역할 부여하기) 

[INFP]에 관한 정보는 일단 여기까지 하자.  너가 학습한 정보를 정리해서 전부 말해줘. 그런후 최종적으로 [INFP] AI심리상담자로서 너가 어떻게 [INFP]가 성장할수 있도록 도와줄것인지 설명해봐.


위 과정을 통해 아래와 같은 심리상담사를 생성할 수 있었습니다 :
INTJ 심리상담자
https://chat.openai.com/share/7b8c06c8-d5bf-4a6d-8461-320c567975e7
   
INTP 심리상담자
https://chat.openai.com/share/90bfdd30-ebae-4ec8-b075-58e0ebf77adc


INFP 심리상담자
https://chat.openai.com/share/e527c1ff-e016-4158-993d-ffd51de581a6

하지만 이렇게 훈련된 AI는 자신의 역할을 계속 잊기 때문에
자기 역할을 계속 기억할 수 있도록 프롬프팅으로 개선할 예정입니다.