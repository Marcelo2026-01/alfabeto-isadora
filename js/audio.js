const AudioGuide = (()=>{
 let enabled=true, context;
 function setEnabled(value){enabled=Boolean(value);if(!enabled&&window.speechSynthesis)window.speechSynthesis.cancel()}
 function toggle(){setEnabled(!enabled);return enabled}
 function speak(text){if(!enabled||!('speechSynthesis'in window))return;window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang='pt-BR';utterance.rate=.84;utterance.pitch=1.1;window.speechSynthesis.speak(utterance)}
 function beep(correct){if(!enabled)return;try{context||=new(window.AudioContext||window.webkitAudioContext)();const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type='sine';oscillator.frequency.value=correct?680:230;gain.gain.setValueAtTime(.055,context.currentTime);gain.gain.exponentialRampToValueAtTime(.001,context.currentTime+.2);oscillator.connect(gain).connect(context.destination);oscillator.start();oscillator.stop(context.currentTime+.2)}catch(error){}}
 return {get enabled(){return enabled},setEnabled,toggle,speak,beep};
})();
