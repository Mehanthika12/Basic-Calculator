// Create HTML structure
document.addEventListener("DOMContentLoaded", () => {
    
})
const html = document.createElement("html");
const head = document.createElement("head");
const script = document.createElement("script")
script.src = "https://cdn.tailwindcss.com"
head.appendChild(script)
const body = document.createElement("body");
const title = document.createElement("title");
title.textContent = "Basic Calculator";
head.appendChild(title);
html.appendChild(head);
html.appendChild(body);
body.classList.add("bg-red-800")
// Main Wrapper
const calculatorWrapper = document.createElement("div");
calculatorWrapper.id = "calculator";
calculatorWrapper.classList.add("bg-black", "flex", "gap-4", "absolute", "left-1/2", "top-1/2", 
    "transform", "-translate-x-1/2", "-translate-y-1/2", "w-full", "md:w-5/12", "p-8", "flex-col", "text-center", 
    "shadow-2xl", "rounded-lg");
body.appendChild(calculatorWrapper);
const header = document.createElement("h1");
header.classList.add("text-2xl", "font-bold", "text-white")
header.textContent = "Basic Calculator";
calculatorWrapper.appendChild(header)


const fields = document.createElement("div");
fields.classList.add("flex", "gap-4", "w-full", "justify-center")
calculatorWrapper.appendChild(fields)

const createInputField = (id, placeholder, name) => {
    const fieldDiv = document.createElement("div");
    fieldDiv.id = id;
    const input = document.createElement("input");
    input.type = "text"
    input.id = name;
    input.placeholder = placeholder;
    input.classList.add("h-8", "w-12/12", "rounded-lg", "p-1", "outline-none");
    fieldDiv.appendChild(input);
    fields.appendChild(fieldDiv);
    return input;
}

const value1 = createInputField("first-num", "Enter The  Number...", "num1");

// Operator selection
const Operator = document.createElement("select");

Operator.classList.add("h-8", "w-full", "rounded-lg", "outline-none");
["+", "-", "*", "/"].forEach(op => {
    const option = document.createElement("option");
    option.value = op;
    option.textContent = op;
    Operator.appendChild(option);
});
fields.appendChild(Operator);
document.replaceChild(html, document.documentElement);

const value2 = createInputField("second-num", "Enter The  Number...", "num2");
// value1.addEventListener('input', () => console.log(Number(value1.value)));
// value2.addEventListener('input', () => console.log(Number(value2.value)));

// Result display
const resultDisplay = document.createElement("div");
resultDisplay.id = "result";
resultDisplay.classList.add("mt-4", "text-lg", "font-semibold");
calculatorWrapper.appendChild(resultDisplay);

const calculator = () => {
    const num1 = Number(value1.value);
    const num2 = Number(value2.value);
    const operation = Operator.options[Operator.selectedIndex].value;
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error: Div by 0";
            break;
    }
    resultDisplay.textContent = `Result: ${result}`;
}
// Add calculate button
const calculateButton = document.createElement("button");
calculateButton.textContent = "Calculate";
calculateButton.addEventListener('click', calculator);
calculateButton.classList.add("bg-yellow-200", "text-black", "rounded-lg", "p-2", "hover:bg-blue-400", 
    "transition", "ease-linear", "duration-200"
);
calculatorWrapper.appendChild(calculateButton);

