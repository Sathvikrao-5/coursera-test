(function(window){
var byeSpeaker=new Object();
var speakword="Good Bye";
byeSpeaker.speak=function speak(name){
console.log(speakword+" "+name);
};
window.byeSpeaker=byeSpeaker;
})(window);
