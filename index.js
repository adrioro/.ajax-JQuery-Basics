$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "htmlFile.html",
            success: function (data) {
                $("#ajaxDiv").html(data);
            }
        })
    })
})