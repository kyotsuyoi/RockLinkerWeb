var table = document.getElementById("play_list_table");
var lines = table.getElementsByTagName("tr");
button_play = document.getElementById('button_play');

player = document.getElementById('player');
var count = 0;

document.getElementById('btn-add-line').addEventListener("click", function(){
    $('<tr></tr>').attr("class","_"+(count+1)).insertAfter("._"+count);
    count+=1;
    $('<td>ID</td>').appendTo("tr._"+count);
    $('<td>ARTIST</td>').appendTo("tr._"+count);
    $('<td>MUSIC</td>').appendTo("tr._"+count);
    //$("div.direita").appendTo("tr.new_line");


      var json_obj = JSON.parse(Get("http://34.95.182.240/RockLinkerServer"));
      console.log("JSON: "+json_obj);
});

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.setRequestHeader('Content-Type', 'text/xml');
    Httpreq.send();
    return Httpreq.responseText;
}

for(var i = 1; i < lines.length; i++){
	var line = lines[i];
    line.addEventListener("click", function(){
  	    //Adicionar ao atual
		selectLine(this, false); //Selecione apenas um
        //selectLine(this, true); //Selecione quantos quiser
	});
}

function selectLine(line, multiplos){
    if(!multiplos){
        var lines = line.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < lines.length; i++){
            var line_ = lines[i];
            line_.classList.remove("selected_line");
        }
    }
    line.classList.toggle("selected_line");

    var all_selected = table.getElementsByClassName("selected_line");
   //Verificar se está selecionado
    if(all_selected.length < 1){
   	alert("Selecione pelo menos uma linha");
     return false;
   }

   var string = "";

   for(var i = 0; i < all_selected.length; i++){
        var selected = all_selected[i];
        selected = selected.getElementsByTagName("td");

        string += selected[1].innerHTML + " - " + selected[2].innerHTML + "\n";
    }

    title.innerHTML = string;
    player.src="http://34.95.182.240/RockLinkerServer/songs/"+selected[1].innerHTML+" - "+selected[2].innerHTML+".mp3";
    console.log(player.src);
    player.play();

    button_play.src="src/ic_pause_purple.webp"

}

// var button = document.getElementById("button");
// button.addEventListener("click", function(){
// });