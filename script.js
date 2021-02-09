var button = document.getElementById("button")
button.addEventListener("click", async function(){
    var url;
    var height = document.getElementById("exampleInput").value;
    var width = document.getElementById("exampleInputwidth").value;
    var grayscale = document.getElementsByName("exampleCheck1");
    var blureffect = document.getElementById("blur").value;
    console.log(width,height,grayscale,blureffect)
    for(i=0;i<grayscale.length;i++) {
        if(grayscale[i].checked&&blureffect!=""){
            if(i==0){
                 url = 'https://picsum.photos/'+height+'/'+width+'?grayscale&blur='+blureffect
                 console.log(url);
            }
            else {
                 url = 'https://picsum.photos/'+height+'/'+width+'?blur='+blureffect
            }
        }
        else if(blureffect==""&&grayscale[i].checked){
            if(i==0){
                url = 'https://picsum.photos/'+height+'/'+width+'?grayscale'
            }
        }
    }
    try {
    let response = await fetch(url);
    console.log(response)
    var div = document.createElement("div");
    div.classList.add("col-12" ,"text-center");
    var a = document.createElement('a');
    a.innerText = "Image link"
    a.setAttribute('href',response.url)
    div.append(a);
    document.body.append(div);
    }
    catch(error){
        console.log(error);
    }
})

