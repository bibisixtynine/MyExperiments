// main.js

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

    // Center the text horizontally
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.margin = 'auto';

    return textObj;
}

// Define a Circle function
function Circle() {
    const circleElement = document.createElement('div');
    // set the width and height of the view so it is a square of the width or height (depending which is the greater) of the parent container
    circleElement.style.width = '100%';
    circleElement.style.height = '100%';
    

    circleElement.style.borderRadius = '50%';
    circleElement.style.backgroundColor = 'blue'; // You can set the default color here

    const circleObj = {
        element: circleElement,
        foregroundColor: function (color) {
            if (color) {
                circleElement.style.backgroundColor = color;
            }
            return circleObj;
        },
        onClick: function (callback) {
            if (callback) {
                circleElement.addEventListener('click', callback);
                circleElement.style.cursor = 'pointer';
            }
            return circleObj;
        },
        radius: function (newRadius) {
            if (newRadius) {
                circleElement.style.width = `${2 * newRadius}px`;
                circleElement.style.height = `${2 * newRadius}px`;
            }
            return circleObj;
        },
    };

    // Center the circle horizontally and vertically
    circleElement.style.display = 'flex';
    circleElement.style.justifyContent = 'center';
    circleElement.style.alignItems = 'center';
    circleElement.style.margin = 'auto'; // Center the circle horizontally

    return circleObj;
}

// Define an HStack function
function HStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.display = 'flex';
    stackElement.style.flexDirection = 'row';
    stackElement.style.justifyContent = 'space-between'; // Equal spacing between children

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
    stackElement.style.justifyContent = 'center'; // Center children vertically

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


function Spacer() {
    const spacerElement = document.createElement('div');
    spacerElement.style.flex = 1; // Use flexGrow to create space

    const spacerObj = {
        element: spacerElement,
    };

    return spacerObj;
}

// Define a Body function
function Body(...children) {
    const bodyElement = document.createElement('div');
    bodyElement.style.display = 'flex';
    bodyElement.style.flexDirection = 'column';
    bodyElement.style.justifyContent = 'center'; // Center children vertically

    bodyElement.style.width = '100%';
    bodyElement.style.height = '100%';
    bodyElement.style.position = 'fixed';
    bodyElement.style.top = '0';
    bodyElement.style.left = '0';
    children.forEach((child) => {
        if (child && child.element) {
            bodyElement.appendChild(child.element);
        }
    });

    const bodyObj = {
        element: bodyElement,
    };

    document.body.appendChild(bodyObj.element);

    return bodyObj;
}

// Usage example with HStack and VStack:



/*
Body(
    Text("My First Web Site")
        .fontSize("50px"),
    Text("designed with JavaScriptUI"),
    Spacer(),
    HStack(
        Circle()
            .foregroundColor("red"),
        Circle()
    ),
    Spacer(),
    Text("click me")
        .onClick(() => alert("Ouch !"))
        .backgroundColor("blue"),
    Spacer(),
    HStack(
        Spacer(),
        Text("Hello World")
            .backgroundColor("red"),
        Spacer(),
        Text("I'm Robert").backgroundColor("red"),
        Spacer(),
        Text("I'm happy").backgroundColor("red"),
        Spacer(),
        Circle(),
        Spacer()
    ),
    Spacer()
        
)
*/

Body(
    Text("My First Web Site"),
    Circle(),
    Text("So cool !")
)





