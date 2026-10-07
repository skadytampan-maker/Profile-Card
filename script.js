const followButton = document.getElementById("follow");

followButton.addEventListener("click", function() {

    if (followButton.textContent === "Follow") {
        followButton.textContent = "Following";
    } else {
        followButton.textContent = "Follow";
    }

});