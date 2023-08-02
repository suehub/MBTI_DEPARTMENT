import { qnaList, MBTIType, infoList } from "./data.js";    // data.js 내부 객체 배열을 전역 변수로 사용 -> import/export 사용

const start = document.querySelector("#start");
const startBtn = document.querySelector('.start-button');
const question = document.querySelector("#question");
const result = document.querySelector("#result");
const ENDPOINT = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0];    // E I N S F T P J

begin(); 
restart(); 

// 질문 페이지 전환
function begin() {  
    startBtn.addEventListener('click', () => {
        start.style.display = 'none';
        question.style.display = 'block';
        let qIdx = 0;
        goNext(qIdx);
    })
}

// 다음 질문으로 이동
function goNext(qIdx){
    if(qIdx === ENDPOINT){
        goResult();
        return;
    }

    let q = document.querySelector('.question-box');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
}

// 질문 추가
function addAnswer(answerText, qIdx, idx) {
    const a = document.querySelector('.answer-box');
    const answer = document.createElement('button');
    answer.classList.add('answer-box__list');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        const children = document.querySelectorAll('.answer-box__list');

        let target = qnaList[qIdx].a[idx].type; // select index (mbti 알파벳 위치)
        for(let i=0; i<target.length; i++) {
            select[target[i]] += 1; // select 배열에서 각 mbti 위치의 값 증가
        }

        for(let i=0; i < children.length; i++) {
            children[i].remove(); // 이전 버튼 disply: none; 에서 remove로 삭제함
        }
        goNext(++qIdx);
    }, false);
}

// 결과 계산
function calResult() {

    let idx = 0;
    let result = '';

    for(let i=0; i<select.length; i+=2) {
        (select[i] < select[i+1]) ? idx=i+1 : idx=i;
        result += MBTIType[idx].name;
    }
    console.log(result);
    return result;
}

// 결과 엘리먼트 생성
function setResult() {
    const result = calResult();
    let point = 0;
    
    for(let i=0; i<infoList.length; i++) {
        if(infoList[i].name === result) {
            point = i;
        }
    }
    const resultName  = document.querySelector('.result-name');
   
    resultName.innerHTML = infoList[point].name;

    const resultImg = document.createElement('img');
    const imgDiv = document.querySelector('.result-img');
    let imgURL = '../assets/' + result + '.png';
    resultImg.src = imgURL;
    resultImg.alt = result;
    imgDiv.appendChild(resultImg);
    resultImg.setAttribute('loading', 'lazy');

    const resultDesc = document.querySelector('.result-desc');
    resultDesc.innerHTML = infoList[point].desc;

    const resultDepart = document.querySelector('.result-department');
    resultDepart.innerHTML = infoList[point].department;    

}

// 결과 화면 전환
function goResult() {
    question.style.display = "none";
    result.style.display = "block";
    
    setResult();
}

// 재시작
function restart() { 
    const restartBtn = document.querySelector('.restart-button');

    restartBtn.addEventListener('click', () => {
        location.reload();  
    })
}