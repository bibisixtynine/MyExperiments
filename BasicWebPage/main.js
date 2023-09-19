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
    Text("🌮 Tacos are life!").fontFamily('Averia Libre'),
    Text("🍕 Pizza is bae!").fontFamily('Averia Libre'),
    Text("🍔 Burgers for the win!").fontFamily('Averia Libre'),
    Text("🍦 Ice cream heaven!").fontFamily('Averia Libre'),
    Text("🥨 Pretzels are twisted!").fontFamily('Averia Libre'),
    Text("🍟 Fries before guys!").fontFamily('Averia Libre'),
    Text("🍩 Donuts are dope!").fontFamily('Averia Libre'),
    Text("🍭 Candy crush!").fontFamily('Averia Libre'),
    Text("🥤 Soda pop party!").fontFamily('Averia Libre'),
    Text("🍪 Cookies make me smile!").fontFamily('Averia Libre'),
    Text("🥤 Sip, sip, hooray!").fontFamily('Averia Libre'),
    Text("🍉 Watermelon wonder!").fontFamily('Averia Libre'),
    Text("🍓 Berrylicious bliss!").fontFamily('Averia Libre'),
    Text("🍰 Sweet as pie!").fontFamily('Averia Libre'),
    Text("🍩 Donuts make my day!").fontFamily('Averia Libre'),
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





