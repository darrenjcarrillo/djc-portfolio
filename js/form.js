console.log("it works!");

$(document).ready(function() {
  $(".btn").click(function(event) {
    // event.preventDefault();
    console.log("Clicked");

    // let email = $(".email").val();
    // let subject = $(".subject").val();
    // let message = $(".message").val();
    // let statusElm = $(".status");
    // statusElm.empty();

    // if (email.length > 5 && email.includes("@") && email.includes(".")) {
    //   statusElm.append("<div>Email is valid</div>");
    // } else {
    //   statusElm.append("<div>Email is not valid</div>");
    // }

    // if (subject.length > 5 && subject.includes("@") && subject.includes(".")) {
    //   statusElm.append("<div>subject is valid</div>");
    // } else {
    //   statusElm.append("<div>subject is not valid</div>");
    // }

    // if (message.length > 5 && message.includes("@") && message.includes(".")) {
    //   statusElm.append("<div>message is valid</div>");
    // } else {
    //   statusElm.append("<div>message is not valid</div>");
    // }
  });
});
