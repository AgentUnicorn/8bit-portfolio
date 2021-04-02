// $(document).ready(function() {
//     alert("HI");
//     $(".about").click(function() {
//       $(".mainPage").fadeOut(500);
//       $(".aboutPage")
//         .delay(500)
//         .slideDown(500);
//     });
//     $(".skills").click(function() {
//       $(".frontPage").fadeOut(500);
//       $(".skillPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//     $(".projects").click(function() {
//       $(".frontPage").fadeOut(500);
//       $(".projectPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//     $(".contact").click(function() {
//       $(".frontPage").fadeOut(500);
//       $(".contactPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//     $("#close").click(function() {
//       $(".aboutPage").slideUp(500);
//       $(".frontPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//     $(".close").click(function() {
//       $(".skillPage").fadeOut(500);
//       $(".frontPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//     $(".closer").click(function() {
//       $(".projectPage").fadeOut(500);
//       $(".frontPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//     $(".closing").click(function() {
//       $(".contactPage").fadeOut(500);
//       $(".frontPage")
//         .delay(500)
//         .fadeIn(700);
//     });
//   });

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }

function pageLoad() {
  console.log('pageLoad');
  $(document).ready(function () {
      // alert("hi");
      $(".about").click(function() {
        $(".mainPage").fadeOut(500);
        $(".aboutPage")
          .delay(500)
          .slideDown(500);
      });
      $(".skill").click(function() {
        $(".mainPage").fadeOut(500);
        $(".skillPage")
          .delay(500)
          .fadeIn(700);
      });
      // $(".work").click(function() {
      //   $(".mainPage").fadeOut(500);
      //   $(".workPage")
      //     .delay(500)
      //     .fadeIn(700);
      // });
      // $(".contact").click(function() {
      //   $(".mainPage").fadeOut(500);
      //   $(".contactPage")
      //     .delay(500)
      //     .fadeIn(700);
      // });
      $("#close").click(function() {
        $(".aboutPage").slideUp(500);
        $(".mainPage")
          .delay(500)
          .fadeIn(700);
      });
      $(".close").click(function() {
        $(".skillPage").fadeOut(500);
        $(".mainPage")
          .delay(500)
          .fadeIn(700);
      });
      $(".closer").click(function() {
        $(".workPage").fadeOut(500);
        $(".mainPage")
          .delay(500)
          .fadeIn(700);
      });
      $(".closing").click(function() {
        $(".contactPage").fadeOut(500);
        $(".mainPage")
          .delay(500)
          .fadeIn(700);
      });
  });
};