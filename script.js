
function question(){
    const question = document.getElementById('question_search').value;
    alert(question)
}

document.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        searching(document.getElementById("question_search").value)
        }
    }, false
);

const box_search = document.getElementById("search")
function searching(question){
    if (window.getComputedStyle(box_search).display !== "none"){
        alert(question)
    }
     
 }