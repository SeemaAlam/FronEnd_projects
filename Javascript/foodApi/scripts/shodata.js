
async function getData(url){
    try{
    let res=await fetch(url);
    let data=await res.json();
    return data;
    }catch(e){
       console.log('e:', e)
    }
}




function appendData1(data,parent){
    parent.innerHTML=null;
    console.log(data.meals[0]);
    let div=document.createElement('div');
        let p=document.createElement('p');
        let img=document.createElement('img');
        img.src=data.meals[0].strMealThumb;
        img.setAttribute('class',"picture")

        p.innerHTML=data.meals[0].strMeal;
        var x=data.meals[0];
        let ul=document.createElement("ul");
        ul.setAttribute("class","list");

   
    for(var i=1;i<=20;i++){
          var str=`strIngredient${i}`;
          var str2=`strMeasure${i}`; 
          if(`${x[str]}`){
           let li= document.createElement('li');
           li.appendChild(document.createTextNode(`${x[str]}=${x[str2]}`));
           //li.innerHTML=`${x[str]}=${x[str2]}`;
           ul.appendChild(li);
          }  
       }
      
       let instructions=document.createElement('p');
       instructions.innerHTML=x.strInstructions;
       instructions.setAttribute('class',"inst")

     
      let v=document.createElement('div');
      
     v.innerHTML=`<iframe src="https://www.youtube.com/embed/${x.strYoutube.slice(-11)}" title="YouTube">`
     v.setAttribute('class','vid');


      div.append(p,img,ul,instructions,v);

      parent.append(div);
  
}

function fullrecepi(idMeal){
    
    window.location.href="/foodApi-IV/abc.html";
}

export {getData,appendData1,fullrecepi}