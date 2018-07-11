(function(global) {

  $.ajax({
    url: "https://formspree.io/email.email.com", 
    method: "POST",
    data: $('#contact-form').serialize(), //takes all items in form
    dataType: "json" // the data structure type
  })
  //if it is successful
  .success(function(e){
    //where you want the redirect to go
    alert('전송완료');
    window.location.replace("./thankyou.html");
  })
  //reset the submit button if the submission fails
  .error(function(e){ $("#contact-submit").text("Submit"); });

}(window));