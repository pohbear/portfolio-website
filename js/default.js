$(document).ready(function () {
    $(".body-content").hide().toggleClass("hidden").delay(300).fadeIn(300);
    $(".my-nav").click(function (e) {
      /* 
      need to store the current element being clicked here
      because within setTimeout(), $(this) doesn't point to the element
      but window because that's what is used to call the function setTimeout
      */
      var nav = $(this);
      var goto = nav.attr("href");
      console.log(nav);
      console.log(goto);
      e.preventDefault();
      $(".body-content").fadeOut(300);
      setTimeout(function () {
          window.location.href = goto;
        // if (nav.hasClass("nav-portfolio")) {
        //   window.location.href = "portfolio.html";
        // } else if (nav.hasClass("nav-about")) {
        //   window.location.href = "about.html";
        // } else if (nav.hasClass("nav-contact")) {
        //   window.location.href = "contact.html";
        // } else if (nav.hasClass("nav-home")) {
        //   window.location.href = "index.html";
        // } else {
        //     window.location.href = goto;
        // }
      }, 600);
    });
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $("a")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(0.5)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
  });