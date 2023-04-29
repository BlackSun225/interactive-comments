$(document).ready(function(){

  $(".plus").hover(function() {
    $(this).children("img").attr("src","images/icon-plus-blue.svg");
  }, function() {
    $(this).children("img").attr("src","images/icon-plus.svg");
  });
  $(".plus").click(function() {
    let a = Number($(this).next("span").text());
    a++;
    $(this).next("span").text(a);
  });

  $(".min").hover(function() {
    $(this).children("img").attr("src","images/icon-minus-blue.svg");
  }, function() {
    $(this).children("img").attr("src","images/icon-minus.svg");
  });
  $(".min").click(function() {
    let a = Number($(this).prev("span").text());
    a--;
    if(a < 0) {
      a = 0;
    }
    $(this).prev("span").text(a);
  });
  
  $(".reply").click(function() {
    let resp = "<div class='response'><img alt='' src='images/avatars/image-juliusomo.png' /><textarea cols='50' rows='5' placeholder='Add a comment...' ></textarea><button>REPLY</button></div>";
    let repBox = "<div class='replyBox'></div>";
    if($(this).parents(".comment").nextAll(".replyBox").length >= 1) {
      $(this).parents(".comment").next(".replyBox").append(resp);
    }else{
      $(this).parents(".comment").after(repBox);
      $(this).parents(".comment").next(".replyBox").append(resp);
    }
    $(".replyBox").filter(function(){
      //return $(".comment", this).length < 1;
      //the code below this line is the same as the code above this line;    
      return $(this).children().length < 2;
    }).css({
        "width":"100%",
        "margin-left": "0",
        "padding-left":"0",
        "border":"none"
    });
    $(".replyBox").filter(function(){
      return $(this).children().length > 1;
    }).css({
        "width":"95%",
        "margin-left": "5%",
        "padding-left":"5%",
        "border-left":"1px solid hsl(223, 19%, 93%)"
    });
  });

  $(".edit").click(function() {
    let txt = $(this).parents(".comment").find(".content").text();
    txt = txt.trim();
    txt = txt.replace(/\s+/g, " ");
    $(this).parents(".comment").find(".content").replaceWith(`<textarea rows='5'></textarea>`);
    $(this).parents(".comment").find("textarea").val(txt);
    $(this).parents(".comment").find("textarea").after("<button class='updatebtn'>UPDATE</button>");
    $(this).parents(".comment").find(".updatebtn").css("width","6em");
  });

  $(".delete").click(function() {
    $(".deletebox").css("display","flex");
  });

  $(".deletebtn").click(function() {
    $(".deletebox").css("display","none");
    $(".delete").parents(".comment").css("display","none");
  })
  $(".cancel").click(function() {
    $(".deletebox").css("display","none");
  });
});