window.onload = function() {
    var header = document.getElementById("header-section");
    var sticky = header.offsetTop;
  
    function stickyHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  
    window.onscroll = function() {
      stickyHeader();
    };
  };