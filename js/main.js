var typed = new Typed('.typing', {
    strings: ['Designer.','Professional Coder.', 'Developer.'],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true, 

  });
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }