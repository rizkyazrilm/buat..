var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 14
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "1",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 500,
      fontSize: fontSize.small
    },
    {
      text: "In a way, you are poetry material,        You are full of cloudy subtleties I'm willing to spend a lifetime figuring out. Words burst in your essence and you carry their dust in the pores of your ethereal individuality.",
      y: 30,
      x: posX,
      duration: 25000
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.small,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "2",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 500,
      fontSize: fontSize.small
    },
    {
      text: "I sink into your eyes whenever I'm looking at you.",
      y: 25,
      x: posX,
      duration: 7000
    },
    {
      text: "And I close my eyes to gaze into those depths, and am almost engulfed in you.",
      y: 40,
      x: posX,
      duration: 7000
    },
    {
      text: "I can’t feel a thing, All mournful petal storms are dancing inside the very private spring of my head.",
      y: 40,
      x: posX,
      duration: 7000
    }
    
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.small,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "3",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 500,
      fontSize: fontSize.small
    },
    {
      text: "spending each day of the year. honest, we've got so familiar.",
      y: 25,
      x: posX,
      duration: 10000
    },
    {
      text: "On this day, as you celebrate your own existence, know that you are cherished for all that you are.",
      y: 40,
      x: posX,
      duration: 15000
    },
    {
      text: "I offer my heartfelt felicitations, as someone profoundly touched by your presence in this bewildering world. Happy birthday, my dear. ",
      y: 40,
      x: posX,
      duration: 15000
    }

  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.small,
    autoAnimation: false
  }
);
vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
  
});
