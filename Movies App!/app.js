$(function () {
    $("#movieForm").on("submit", function (e) {
        e.preventDefault();
        let movieTitle = $("#title").val();
        let rating = $("#rating").val();

        let newDiv = $("<div>").append($("<p>").text(`Movie: ${movieTitle} |  Rating: ${rating}`))
        $("<button>").text("Delete").appendTo(newDiv);
        $("#movies").append(newDiv);

        $("#title").val("");
        $("#rating").val("");

    })

    $("#movies").on("click", "button", function (e) {
        $(e.target).parent().remove();
    })

})




