$("body").height(window.innerHeight-10);
$('button').click(function(event){
    let name = $("#name");
    let marks = $("#marks");
    let roll = $("#roll");
    let nameVal = name.val();
    let marksval = marks.val();
    let rollVal = roll.val();

    localStorage.setItem("name",nameVal);
    localStorage.setItem("marks",marksval);
    localStorage.setItem("roll",rollVal);

    event.preventDefault();
    if(nameVal === "" || rollVal === "" || marksval === ""){
        alert("Please fill all atteributes");
    }else{
        let item = '<div class="items">Roll No <span class = "highlight">'+ rollVal +'</span> Name is <span class= "highlight">'+
                    nameVal + '</span> marks is <span class = "highlight">'+ marksval +'</span></div>'
        
        $('#items').append(item);
        
        roll.val("");
        name.val("");
        marks.val("");
    }
   
})
window.onload = function(){
    let name = localStorage.getItem("name");
    let marks = localStorage.getItem("marks");
    let roll = localStorage.getItem("roll");
    if(name==null){
        window.alert("Welcome you are visiting here for the first time");
        return;
    }
    window.alert("Welcome Back you can see your last entry only");
    let item = '<div class="items">Roll No <span class = "highlight">'+ roll +'</span> Name is <span class= "highlight">'+
    name + '</span> marks is <span class = "highlight">'+ marks +'</span></div>'

$('#items').append(item);
}