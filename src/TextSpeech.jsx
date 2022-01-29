import React from "react";
const TextSpeech = () => {
    const speak = () => {
        var msg = new SpeechSynthesisUtterance()
        msg.text = "hello how are you , i hope you are doing well"
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
