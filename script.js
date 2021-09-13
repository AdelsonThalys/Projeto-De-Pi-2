
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
const content = document.getElementById("content")
function searching(question){
    if (window.getComputedStyle(box_search).display !== "none"){
        alert(question)
    }
 }




function visible_search(){
    if (window.getComputedStyle(box_search).display == "none"){
        content.style.display = "none"
        box_search.style.display = "block"

    }else{
        content.style.display = "block"
        box_search.style.display = "none"
    }
 }

 