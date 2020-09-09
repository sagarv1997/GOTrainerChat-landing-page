$(document).ready(() => {
  // Button Shake
  var waypoints = $(".js--section-discover").waypoint(
    function (direction) {
      $(".discover .buttons-wrapper").addClass(
        "animate__animated animate__shakeX"
      );
    },
    {
      offset: "25%",
    }
  );

  var waypoints = $(".js--section-features").waypoint(
    function (direction) {
      $(".js--section-features.feature-long").addClass(
        "animate__animated animate__fadeIn"
      );
    },
    {
      offset: "-50%",
    }
  );
});
