
function question(){
    const question = document.getElementById('question_search').value;
    alert(question)
}

document.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
       var search = document.getElementById("question_search").value;
       alert(search)
    }
 }, false);