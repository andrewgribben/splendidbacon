jQuery(function() {

  function ClearForm() {
    document.new_invitation.invitation_email.value= "";
  }


  var scroll = 448;
  var maxScroll = $("#months").width() - $("#timeline").width();
  var currentScroll = 0;

  $("a[href='#next']").click(function() {
    if (currentScroll < maxScroll) {
      $("#timeline .project, .month, #today_bar").animate({ left: "-=" + scroll + "px" });
      currentScroll += scroll;
      console.log(currentScroll);
    }
    return false;
  });

  $("a[href='#prev']").click(function() {
    if (currentScroll >= scroll) {
      $("#timeline .project, .month, #today_bar").animate({ left: "+=" + scroll + "px" });
      currentScroll -= scroll;
    }
    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      $("a[href='#prev']").click();
      return false;
    }
    if (e.keyCode == 39) {
      $("a[href='#next']").click();
      return false;
    }
  });
  

  $(".relatize").relatizeDate();
  
  $(".datepicker").datepicker({ dateFormat: 'd MM yy' });
  
  $("input.person:checked").each(function(){
    $("label[for=" + $(this).attr("id") + "]").addClass("selected");
  });
  
  $("input.person").hide();
  
  $(".person label.collection_check_boxes").click(function() {
    if ($("#" + $(this).attr("for")).attr("checked"))
    {
      $(this).removeClass("selected");
      $("#" + $(this).attr("for")).attr('checked', false);
    }
    else
    {
      $(this).addClass("selected");
      $("#" + $(this).attr("for")).attr('checked', true);
    }
  });
  
  $("#project_active").hide();
  
  $("label[for=project_active].toggle").click(function() {
    if ($("#project_active[type=checkbox]").attr("checked"))
    {
      $("#project_active[type=checkbox]").attr('checked', false);
      $(this).removeClass("green").addClass("red");
      $(this).text("On hold");
    }
    else
    {
      $("#project_active[type=checkbox]").attr('checked', true);
      $(this).addClass("green").removeClass("red");
      $(this).text("Working");
    }
  });

  $(".projectcontent").click(function() {
    window.location = $(this).find("h2 a").attr("href");
    return false;
  });
});
