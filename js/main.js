const start = document.querySelector("#start");
const question = document.querySelector("#question");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {

    var idx = 0;
    var result = '';

    for(let i=0; i<select.length; i+=2) {
        (select[i] < select[i+1]) ? idx=i+1 : idx=i;
        result += MBTIType[idx].name;
    }

    return result;
}

function setResult() {
    var result = calResult();
    var point = 0;
    
    for(let i=0; i<infoList.length; i++) {
        if(infoList[i].name === result) {
            point = i;
        }
    }
    const resultName  = document.querySelector('.result-name');
   
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('.result-img');
    var imgURL = '../assets/' + result + '.png';
    resultImg.src = imgURL;
    resultImg.alt = result;
    // resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.result-desc');
    resultDesc.innerHTML = infoList[point].desc;
}


function goResult() {
    question.style.display = "none";
    result.style.display = "block";
    var qIdx = 0;
    goNext(qIdx);
    setResult();
    calResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answer-box');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');

        var target = qnaList[qIdx].a[idx].type;
        for(let i=0; i<target.length; i++) {
            select[target[i]] += 1;
        }

        for(let i=0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        goNext(++qIdx);
    }, false);
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.question-box');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
}

function begin() {
    start.style.display = 'none';
    question.style.display = 'block';
    var qIdx = 0;
    goNext(qIdx);
}

