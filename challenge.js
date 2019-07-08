let counter = document.getElementById("counter

let neg = document.getElementById("-")

let pos = document.getElementById("+")

let love = document.getElementById("<3")

let pause = document.getElementById("pause")

let commentForm = document.getElementById("comment-form")
commentForm.addEventListener("submit", function(event){
  event.preventDefault();
})

let commentsList = document.getElementById("list")


///Comment Functions


function leaveComment () {
  let commentInput = document.getElementById("commentInput")

  let li = document.createElement("li");
    li.innerText = commentInput.value;
    commentsList.appendChild(li);
}
