$(function() {

//new WOW().init();

window.sr = ScrollReveal({ reset: true });

sr.reveal('.intro', { duration: 1000 }, 100);
sr.reveal('.devicon', { duration: 1000 }, 100);
sr.reveal('.hovereffect', { duration: 1000 }, 100);
sr.reveal('.form-group', { duration: 1000 }, 100);
sr.reveal('.social-link li', { duration: 1000 }, 100);

  setTimeout(function() {
      $(".txt1").typed({         strings: ["<span class='highlight'>hi,</span>"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);

setTimeout(function(){
        $(".txt2").css("display", "inherit");
        $(".txt2").typed({
            strings: ["<span class='highlight'>this is shahid,</span>"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2000);

setTimeout(function(){
        $(".txt3").css("display", "inherit");
        $(".txt3").typed({
            strings: ["<span class='highlight'>a freelance web developer,</span>"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 4000);

setTimeout(function(){
        $(".txt4").css("display", "inherit");
        $(".txt4").typed({
            strings: ["<span class='highlight'>graphics designer and hobbyist.</span>"],
            typeSpeed: 30, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 6000);

setTimeout(function(){
        $(".txt5").css("display", "inherit");
        $(".txt5").typed({
            strings: ["<span class='highlight'>i <i class='fa fa-heart' aria-hidden='true' style='font-size: 0.7em;'></i> working with Laravel, <i class='fa fa-wordpress' aria-hidden='true' style='font-size: 1em;'></i> & Bootstrap.</span>"],
            typeSpeed: 30, // typing speed
            backDelay: 1200, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 8000);
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
