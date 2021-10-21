function setup() {
    
    classifier=ml5.imageClassifier("MobileNet", modelLoaded);
  
  }
  
  function modelLoaded(){
    console.log("model is Loaded");
  
  
  }
  function draw(){
    
    classifier.classify(video, gotResults);
  
  
  }
  var previous_result="";
  
  function gotResults(error,results){
    if(error){
      console.log(error);
    }
  
    else{
      if((results[0].confidence>0.5)&&(previous_result!=results[0].label)){
        console.log(results);
        previous_result=results[0].label;
        var synth=window.speechSynthesis;
        speak_data="object detected is "+results[0].label;
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
  
        document.getElementById("googleLens").innerHTML=results[0].label;
        document.getElementById("mobileNet").innerHTML=results[0].label;
      }
    }
  }
  
  
  
  
  