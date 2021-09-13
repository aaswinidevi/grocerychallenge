
function item() {
  var  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
        if(this.readyState==4&& this.status==200){
     var response = JSON.parse(this.responseText);
   var list = response.data;
   var output="";
   for(  var i=0; i<list.length; i++)
   {
       output+=`<tr>
                   <td>${list[i].SlNo}</td>
                   <td>${list[i].ItemName}</td>
                   <td>${list[i].Quantity}</td>
                   <td>${list[i].Unit}</td>
                   <td>${list[i].Department}</td>
                   <td>${list[i].Notes}</td>
               </tr>`
      table.innerHTML += output;
   }
  //  document.getElementById("tdata").innerHTML = output;



    }
   }
  xhttp.open("GET", "list.json", true);
  xhttp.send();
}
