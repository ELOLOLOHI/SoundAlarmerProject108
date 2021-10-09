dog=0;
cat=0;
baby=0;
explosion=0;
fire=0;


function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/orOFp32CQ/model.json", result_stuff);
}

function result_stuff(){
    classifier.classify(gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }

    else if(result){
        console.log(result);

        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        

        document.getElementById("sound_number").innerHTML="Detected Dog-"+dog+" Detected Cat-"+cat+" Detected Baby-"+baby+" Detected Explosion-"+explosion+" Detected Fire-"+fire;
        document.getElementById("result_sound").innerHTML="Detected Sound - "+result[0].label;
        document.getElementById("sound_number").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_sound").style.color="rgb("+random_r+","+random_g+","+random_b+")";


        if(result[0].label=="Barking"){
            dog=dog+1;

        }
        if(result[0].label=="Meowing"){
            cat=cat+1;

        }
        if(result[0].label=="Crying Baby"){
            baby=baby+1;


        }
        if(result[0].label=="Explosion"){
            explosion=explosion+1;

        }
        if(result[0].label=="Fire"){
            fire=fire+1;

        }





    }
    
}

//barking, meowing, baby, explosion, fire

