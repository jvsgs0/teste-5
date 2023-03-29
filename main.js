quickDrawDataset=['pato', 'peixe', 'planta', 'celular']

randomNumber = Math.floor((Math.random() *quickDrawDataset.length)+1)

console.log(randomNumber);

sketch = randomNumber;
sketch = document.getElementById("ESD").innerText;

timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;
