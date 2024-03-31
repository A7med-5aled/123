var count=0;
document.getElementById('bttn').addEventListener("click" , function(){
   
    count++;
    var n = document.getElementById('input-bttn').value;
    document.getElementById('input-bttn').value="";
   

     if (n == "Abdo") {
        document.getElementById('lifta').innerHTML=`<h1> خخخخخخخخخخخخ عايز تغفلني ؟ اكتب اللفته</h1>` ;
    }
    else if (n == "abdo"){
        document.getElementById('lifta').innerHTML=`<h1> يسطا اول حرف كاتبيال ارجوك</h1>` ;
    }
    else if(n=="Abdo Elifta") {
        document.getElementById('lifta').innerHTML=` <h1> عامل اي يا لفته؟</h1>` ;
    }
    else if(count==5){
        document.getElementById('lifta').innerHTML=`<h1>احا انا زهقت منك , بص علي اسم الموقع واكتب نفس الاسم الي فيه !</h1>` ;
    }
    else if(count==6){
        document.getElementById('lifta').innerHTML=`<h1>دا انت غبي بقا </h1>` ;
    }
    else if(count>=7){
        document.getElementById('lifta').innerHTML=`<h1>يعم ارحمني واكتب "Abdo Elifta"</h1>` ;

    }
    else{
        document.getElementById('lifta').innerHTML=` <h1> خخخخخخخخخخ كداب كدب الابل  مش مصدقك اكتب اسمك تاني </h1>` ;
    }
    
   
})
