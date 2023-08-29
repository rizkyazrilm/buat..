const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));
const createSubtitle = text => text.split("").map(addWord);
createSubtitle("happy  birthday yeuwww,  you're  17  now  hewhwehewi wish all the better  things will came in to your life.you've been doing great       last year, soo keep itupp!! and be the best versionof yourself okkayy!!! ");
