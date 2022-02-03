
function srcTo(el) {
    $("html, body").animate(
      {
        scrollTop: el.offset().top,
      },
      1000
    );
}
function srcToAnchorWithId(str) {
  var $el = $("#" + str);
  if ($el.length) {
    srcTo($el);
  }
}

$(document).ready(function () {

  $("#ed-button").click(function (e) {
    srcToAnchorWithId("education");
    });

  $("#proj-button").click(function (e) {
    srcToAnchorWithId("projects");
    });

  $("#work-button").click(function (e) {
    srcToAnchorWithId("work");
    });

});
