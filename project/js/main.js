function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $(document).ready(function () {

    $("button").click(function () {
    $('#aaa').addClass('contact');
    });
    
    $('#remove').click(function () {
    $('#aaa').removeClass('contact');
    })
    
    setTimeout(function () {
    $('#aaa').addClass('contact');
    }, 2000);
    
    })