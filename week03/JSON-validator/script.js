var text = $("textarea");
placeholderText = "Type or paste your JSON syntax here...";
text[0].placeholder = placeholderText;
//handles main button with try-catch
$(".validate").click(function () {
    var textValue = text.val();
    try {
        JSON.parse(textValue);
    } catch (err) {
        text.css({
            "background-color": "firebrick",
            color: "white",
        });
        return setTimeout(function () {
            alert("😈😈😈 Sorry, but this is NOT a valid JSON syntax! 😈😈😈");
        }, 1);
    }
    //behavior when NOT error
    text.css({
        "background-color": "mediumseagreen",
    });
    setTimeout(function () {
        alert("🎉🎉🎉 Congrats! This is a VALID JSON syntax! 🎉🎉🎉");
    }, 1);
});
//handles the clear button
$(".clear").click(function () {
    text.val("");
    text[0].placeholder = placeholderText;
    text.css({
        "background-color": "inherit",
        color: "inherit",
    });
});
//cleans the textarea from its placeholder
text.focus(function () {
    text.prop("placeholder", "");
});
