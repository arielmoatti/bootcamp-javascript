var text = $("textarea");

$(".save").click(function () {
    localStorage.setItem("storedTextarea", text.val());
    text.val("your text has been saved");
});

$(".retrieve").click(function () {
    text.val(localStorage.getItem("storedTextarea"));
});
