let sad = ['gif/s1.gif', 'gif/s2.gif', 'gif/s3.gif'];
let cute = ['gif/l1.gif', 'gif/l4.gif', 'gif/l7.gif', 'gif/l8.gif'
    , 'gif/l9.gif', 'gif/l14.gif', 'gif/l15.gif', 'gif/l16.gif'];
let cutie = ['gif/l2.gif', 'gif/l3.gif', 'gif/l5.gif', 'gif/l6.gif', 'gif/l10.gif', 'gif/l11.gif', 'gif/l12.gif', 'gif/l13.gif', 'gif/l17.gif'
    , 'gif/l18.gif'];







let func1 = () => {
    document.getElementById("g").style.display = "block";
    document.getElementById("e").style.display = "none";
}
let f = () => {
   
    let random;
    random = Math.floor(Math.random() * 100);
  
    if (random < 20) {

        let random1 = Math.floor(Math.random() * sad.length);
        document.getElementById("gif").src = sad[random1];
        document.getElementById("text-h1").innerHTML = "MAY BE GOD HAS SOME OTHER PLAN & YOU ARE IN SOMEONE ELSE PRAYERS 🫤 ";

    } else if (random < 50) {
        let random2 = Math.floor(Math.random() * cute.length);
        document.getElementById("gif").src = cute[random2];
        document.getElementById("text-h1").innerHTML = "THERE IS STILL A HOPE, DO GIVE IT A TRY EXPRESS URSELF 🥰";
    } else {
        let random3 = Math.floor(Math.random() * cutie.length);
        document.getElementById("gif").src = cutie[random3];
        document.getElementById("text-h1").innerHTML = "PERFECT MATCH YOU BOTH WILL BE HAPPIER TOGETHER 😘";
    }
    document.getElementById("lv").innerHTML = random + "%";
    document.getElementById("percent").style.display = "block";
}



let f2 = () => {
    document.getElementById("mess").style.display = "block";
}
 










