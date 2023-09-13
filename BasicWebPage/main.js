// main.js

// add a print to body function
function printToBody(msg) {
    var div = document.createElement("div");
    div.innerHTML = msg;
    document.body.appendChild(div);
}

printToBody("Hello World!")

// Define a Text function with background and foreground color modifiers
function Text(text) {
    const element = document.createElement('div');
    element.textContent = text;

    const textObj = {
        element: element,
        onClick: function (callback) {
            if (callback) {
                element.addEventListener('click', callback);
                element.style.cursor = 'pointer';
            }
            return textObj;
        },
        backgroundColor: function (color) {
            if (color) {
                element.style.backgroundColor = color;
            }
            return textObj;
        },
        foregroundColor: function (color) {
            if (color) {
                element.style.color = color;
            }
            return textObj;
        },
        fontSize: function (size) {
            if (size) {
                element.style.fontSize = size;
            }
            return textObj;
        },
    };

    return textObj;
}

// Define an HStack function
function HStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.display = 'flex';
    stackElement.style.flexDirection = 'row';

    children.forEach((child) => {
        if (child && child.element) {
            stackElement.appendChild(child.element);
        }
    });

    const stackObj = {
        element: stackElement,
    };

    return stackObj;
}

// Define a VStack function
function VStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.display = 'flex';
    stackElement.style.flexDirection = 'column';

    children.forEach((child) => {
        if (child && child.element) {
            stackElement.appendChild(child.element);
        }
    });

    const stackObj = {
        element: stackElement,
    };

    return stackObj;
}

// Usage example with HStack and VStack:


const vStackView = VStack(
    Text("Hello World")
      .onClick(() => alert("Hello World")),
    Text("I'm Robert").foregroundColor("red"),
    Text("I'm happy"),
    HStack(
        Text("Hello World"),
        Text("I'm Robert"),
        Text("I'm happy")
    )
);


document.body.appendChild(vStackView.element);
