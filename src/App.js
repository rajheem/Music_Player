
import './App.css';
import React, {useEffect, useState} from "react";
import sound1 from "./sounds/naruto8.mp3"
import sound2 from "./sounds/jujutsu1.mp3"
import sound3 from"./sounds/jujutsu2.mp3"
import sound4 from"./sounds/vinlandsaga1.mp3"
import sound5 from"./sounds/narutoshippuden_sign.mp3"
import sound6 from "./sounds/fullmetal_op5.mp3"
import sound7 from"./sounds/AOT.mp3"
import sound8 from "./sounds/MyHero_OddFuture.mp3"
import sound9 from "./sounds/bleach.mp3"
import instructions from"./documents/Instructions.docx"
import {clear} from "@testing-library/user-event/dist/clear";

function App() {
    function rColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.body.style.color="#"+randomColor;

    }

    const [data,setData]=useState("")
    const[text,setText]=useState("")
    const [drum,setDrum]=useState("")
    let Timer
    let running= false
    let on_off=""

    function change(){

           Timer=setInterval(rColor,3500)

    }
    function stop(){
        clearInterval((Timer))
        document.body.style.backgroundColor="white";
    }

    function play(str) {
        console.log("String is"+ str)
        console.log(str=="off")

            let audio = document.getElementById(str)
            let old = document.getElementById(drum)
            let main = document.getElementById("main-control")
            console.log(main)
            main.src = audio.src
            console.log("Data is" + data)

            if (drum === "") {
                main.play()

            }
            if (drum !== str && drum !== "") {
                main.play()
                old.pause()
                old.currentTime = 0
            }
            if (drum === str) {
                main.currentTime = 0
                main.play()

            }


        setDrum(str)
    }


    useEffect(
        function(){
            document.addEventListener("keydown",detectKeyDown,true)
        },[]
    );
    function detectKeyDown(e) {

        console.log(data)
            if (e.key.toUpperCase() === "Q") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('http://www.nawpic.com/media/2020/naruto-4k-nawpic-30.jpg')"
                play(key)
            }
           else if (e.key.toUpperCase() === "W") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('http://m.gettywallpapers.com/wp-content/uploads/2021/10/Jujutsu-Kaisen-Full-HD-Wallpaper-HD-768x1365.jpg')"
                play(key)
            }
          else  if (e.key.toUpperCase() === "E") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('http://m.gettywallpapers.com/wp-content/uploads/2021/08/Jujutsu-Kaisen-4k-Wallpaper-1536x864.jpeg')"
                play(key)
            }
           else if (e.key.toUpperCase() === "A") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://www.enwallpaper.com/wp-content/uploads/2021/09/f0a37f0e11fcc2ef4eec41997ec95f67.jpg')"
                play(key)
            }
           else if (e.key.toUpperCase() === "S") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/229851.jpg')"
                play(key)
            }
          else  if (e.key.toUpperCase() === "D") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://images7.alphacoders.com/729/thumbbig-729209.webp')"
                play(key)
            }
          else  if (e.key.toUpperCase() === "Z") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://coolthemestores.com/wp-content/uploads/2020/12/attack-on-titan-wallpaper-background.jpg')"
                play(key)
            }
        else    if (e.key.toUpperCase() === "X") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://wallpapers.com/images/hd/my-hero-academia-world-heroes-mission-ophg4qsse6vc3peo-ophg4qsse6vc3peo.jpg')"
                play(key)
            }
       else   if (e.key.toUpperCase() === "C") {
                let key = e.key.toUpperCase()
                document.body.style.backgroundImage="url('https://i.imgur.com/2gLwYeZ.png')"
                play(key)
            }
       else{
           document.body.style.background="white"
            }


    }

    function handleChange(e){
        setText(e.target.value)

    }

    function handleData(e){
        setData(e.target.value)

    }

  return (
      <div>
          <a id="instructions" href={instructions}>CLick Here For Instructions</a>
    <div className="App container-fluid">


        <div  className="grid" id="drum-machine">



            <div className="card" id="display">
                <h1>Music Player</h1>
                <div className="button">
                <button type="button" className="on btn btn-secondary col-4" id="turn-off" onClick={()=>{change()}}>
                    Color On
                </button>

                <button type="button" className="off btn btn-secondary col-4"  id="turn-off" onClick={()=>{stop()}}>
                    Color Off
                </button>
                </div>

                <div className="card-header">
                    {console.log("Data here is"+ data)}
                    <h1>{drum}</h1>
                <audio controls id="main-control" src="" type="audio/mp3"/>
                </div>
                <div className="card-body">
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-1" onClick={()=>{play("Q")}}>Q
                    <audio  className="clip" id="Q" src={sound1} type="audio/mp3"/>
                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-2" onClick={()=>{play("W")}}>W
                    <audio className="clip" id="W" src={sound2} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-3" onClick={()=>{play("E")}}>E
                    <audio className="clip" id="E" src={sound3} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-4" onClick={()=>{play("A")}}>A
                    <audio className="clip" id="A" src={sound4} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-5" onClick={()=>{play("S")}}>S
                    <audio className="clip" id="S" src={sound5} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-6" onClick={()=>{play("D")}}>D
                    <audio className="clip" id="D" src={sound6} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-7" onClick={()=>{play("Z")}}>Z
                    <audio className="clip" id="Z" src={sound7} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-8" onClick={()=>{play("X")}}>X
                    <audio className="clip" id="X" src={sound8} type="audio/mp3"/>

                </button>
                <button type="button" className="col-3 drum-pad btn btn-primary" id="drum-9" onClick={()=>{play("C")}}>C
                    <audio className="clip" id="C" src={sound9} type="audio/mp3"/>
                </button>
                </div>
            </div>
        </div>
    </div>
      </div>


  );
}

export default App;
