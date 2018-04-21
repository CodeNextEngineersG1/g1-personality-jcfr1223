let colors = null,
item = null,
house = null;

let pageTitle = document.getElementById("#page-title"),
pageTitleText = pageTitle.innerHTML,
tryAgain = document.getElementById("try-again"),
quizWrapper = document.getElementById("quiz-wrapper",
result = document.getElementById("result");
formSubmit = document.getElementById("from-submit");

document.getElementById("tryAgain").addEventListener("click", resetQuiz);
document.getElementById("fromSubmit").addEventListener("click", processResults);

function processResults() {
  colors = document.querySelector('input[name="colors"]:checked');
  item = document.querySelector('input[name="item"]:checked');
  house = document.querySelector('input[name="house"]:checked');

  if (colors == null || item == null || house == null) {
    alert("Please complete all of the quiz before submitting");
  } else {
    document.getElementById("quiz-wrapper").style.display = "none";
    document.getElementById("form-submit").style.display = "none";
    document.getElementById("try-again").style.display = "block";
    document.getElementById("result").style.display = "block";
  }

  let personality = getPersonality();

  if (personality == 0) {
    document.getElementById("page-title").innerHTML = "Your are Betty Cooper"
    
  }
}

function getPersonality() {
  let score = 0;
  if(colors.id === "navy-blue") {
    score += 1;
  }
  else if(colors.id === "orange-red") {
    score += 2;
  }
  else if(colors.id === "dark-gray") {
    score += 2;
  }
  if(item.id === "pearl-necklace") {
    score += 1;
  }
  else if(item.id === "guitar") {
    score += 2;
  }
  else if(item.id === "king-beanie") {
    score += 3;
  }
  if(house.id === "house-betty") {
    score += 1;
  }
  else if(house.id === "penthouse-veronica") {
    score += 1;
  }
  else if(house.id === "house-archie") {
    score += 1;
  }
  else if(house.id === "trailer-jughead") {
    score += 2;
  }

  return score;

  if (score == 0 || score == 1) {
    return 0;
  } else if (score == 2 || score == 3) {
    return 1;
  } else if (score == 4 || score == 5) {
    return 2;
  } else if (score == 6 || score == 7) {
    return 3;
  }
}

function resetQuiz(){

}
