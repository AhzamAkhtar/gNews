import React from "react";
const TextSpeech = () => {
    const speak = () => {
        var msg = new SpeechSynthesisUtterance()
        msg.text = "fuck you"
        window.speechSynthesis.speak(msg)
        if ("speechSynthesis" in window) {
            console.log("suported")
        } else {
            console.log("nope")
        }
    }
    return (
        <>
            {speak()}
        </>
    )
}
export default TextSpeech
