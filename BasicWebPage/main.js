// main.js

import { Body, Text, HStack, VStack, Spacer, Circle, Image, ZStack, ScrollView } from "./jysuis.js";


/*
Body(
    HStack(
        Spacer(),
        VStack(
            Text("My First Web Site")
                .fontSize("50px"),
            Text("designed with JavaScriptUI"),
            Spacer(),
        ),
        Spacer(),
        VStack(
            Text("MENU")
                .fontSize("20px"),
            Text("POTATOE"),
            Text("TOMATO"),
            Text("CARROT"),
            Text("BANANA"),
        )

    ),
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
    
    ZStack(
        Text("Hello World"),
        Circle()
    )
        
)
*/


const scrollViewContent = VStack(
    Text("Item 1").fontFamily('Averia Libre'),
    Text("Item 2").fontFamily('Averia Libre'),
    Text("Item 3").fontFamily('Averia Libre'),
    Text("Item 4").fontFamily('Averia Libre'),
    Text("Item 5").fontFamily('Averia Libre'),
    Text("Item 6").fontFamily('Averia Libre'),
    Text("Item 7").fontFamily('Averia Libre'),
    Text("Item 8").fontFamily('Averia Libre'),
    Text("Item 9").fontFamily('Averia Libre'),
    Text("Item 10").fontFamily('Averia Libre'),
    Text("Item 11").fontFamily('Averia Libre'),
    Text("Item 12").fontFamily('Averia Libre'),
    Text("Item 13").fontFamily('Averia Libre'),
    Text("Item 14").fontFamily('Averia Libre'),
    Text("Item 15").fontFamily('Averia Libre'),
);

const myScrollView = ScrollView(
    scrollViewContent,
).height('100px')



const circlesComponent = 
    HStack(
        Spacer(),
        ZStack(
            Circle().foregroundColor("green"),
            Text("1").fontSize("50px"),
        ),
        Spacer(),
        ZStack(
            Circle().foregroundColor("red"),
            Text("2").fontSize("50px"),
        ),
        Spacer(),
        ZStack(
            Circle().foregroundColor("blue"),
            Text("3").fontSize("50px"),
        ),
        Spacer(),
    )

Body(
    Spacer(),
    HStack(
        Spacer(),
            Image('theo.jpg')
                .width('200px')
                .onClick(() => alert('Image Clicked')),
        Spacer(),
    ),
    Spacer(),
    myScrollView,
    Spacer(),
    Text("My First Web Site")
        .fontSize("50px")
        .fontFamily('Luckiest Guy')
        .foregroundColor("red"),

    Spacer(),
    circlesComponent,
    Spacer(),
    Text("Crafted with jysuis !")
        .fontFamily('Reenie Beanie')
        .fontSize('30px'),
    Spacer()
)


/*

Body(
    Spacer(),
    HStack(
        Circle().foregroundColor("red"),
        Circle().foregroundColor("blue"),
    ),
    Spacer(),
    Text("My First Web Site"),
    Spacer(),
    Text("So cool !"),
    Spacer(),
    HStack(
        Text("Hello World")
        .backgroundColor("red"),
        Text("I'm Robert")
        .backgroundColor("blue"),
        Text("I'm happy")
        .onClick(() => alert("Ouch !"))
    ),
    Spacer(),
    Text("I'm happy"),
    Spacer()
)
*/
/*
const scrollViewContent = VStack(
    Text("Item 1"),
    Text("Item 2"),
    Text("Item 3"),
    Text("Item 4"),
    Text("Item 5"),
    Text("Item 6"),
    Text("Item 7"),
    Text("Item 8"),
    Text("Item 9"),
    Text("Item 10"),
    Text("Item 11"),
    Text("Item 12"),
    Text("Item 13"),
    Text("Item 14"),
    Text("Item 15"),
);

const myScrollView = ScrollView(
    scrollViewContent,
);

Body(
    Spacer(),
    Text("My Scrollable View")
        .fontSize("30px"),
    Spacer(),
    myScrollView, // Add the scrollable view using the ScrollView() function
    Spacer()
);
*/




