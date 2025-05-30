const $app = document.querySelector(`#app`);

$app.innerHTML = `
  <h1>Odds and Events</h1>
  <form>
    <p>Add a number to the bank</P>
    <input type="number"/>
    <button id="Add">Add number</button>
    <button id="Sort1">Sort 1</button>
    <button id="SortAll">Sort All</button>
  </form>
  <h2>Bank</h2>
  <ul id="bank"></ul>
  <h2>Odds</h2>
  <ul id="odds"></ul>
  <h2>Evens</h2>
  <ul id="evens"></ul>
`;

const bankList = [];
const oddList = [];
const evenList = [];

const addNum = $app.querySelector(`#Add`);
const sort1 = $app.querySelector(`#Sort1`);
const sortAll = $app.querySelector(`#SortAll`);

const bank = $app.querySelector(`#bank`);
const odds = $app.querySelector(`#odds`);
const evens = $app.querySelector(`#evens`);



addNum.addEventListener(`click`, (event) => {
  event.preventDefault();
  const input = $app.querySelector(`input`);
  const inputValue = input.value;
  const inputNumber = +inputValue;

  bankList.push(inputNumber);
  addToBank(inputValue);

  input.value = ``;
});

const addToBank = (input) => {
  const newNum = document.createElement(`li`);
  newNum.textContent = input;

  bank.appendChild(newNum);
}

sort1.addEventListener('click', (event) => {
  event.preventDefault();
  sort();
});

const sort = () => {
  bank.querySelector(`li`).remove();
  if(bankList.length > 0){
    if(bankList[0]%2 === 1){
      oddList.push(bankList[0]);
      addToOdds(bankList[0]);
    }else{
      evenList.push(bankList[0]);
      addToEvens(bankList[0]);
    }
  }
  bankList.shift();
}

const addToOdds = (input) => {
  const newOdd = document.createElement(`li`);
  newOdd.textContent = input;

  odds.appendChild(newOdd);
}

const addToEvens = (input) => {
  const newEven = document.createElement(`li`);
  newEven.textContent = input;

  evens.appendChild(newEven);
}

sortAll.addEventListener(`click`, (event) => {
  event.preventDefault();
  const length = bankList.length;
  for(let i = 0; i < length; i++){
    sort();
  }
})