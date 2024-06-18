var nav = document.querySelector('.topbar-nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 10) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});


 


//counts
window.addEventListener('scroll', () => {
    if (window.scrollY = 25) {
        function counter(id, start, end, duration) {
                 let obj = document.getElementById(id),
                  current = start,
                  range = end - start,
                  increment = end > start ? 1 : -1,
                  step = Math.abs(Math.floor(duration / range)),
                  timer = setInterval(() => {
                   current += increment;
                   obj.textContent = current + "+";
                   if (current == end) {
                    clearInterval(timer);
                   }
                  }, step);
                }
                counter("stud_count", 0, 1000, 1);
                counter("realtime_count", 0, 50, 150);
                counter("placed_count", 0, 1200, 1);
    }
})




 




tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on("resize", function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    tabControl();
  }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
  var tabs = $(".tabbed-content").find(".tabs");
  if (tabs.is(":visible")) {
    tabs.find("a").on("click", function (event) {
      event.preventDefault();
      var target = $(this).attr("href"),
        tabs = $(this).parents(".tabs"),
        buttons = tabs.find("a"),
        item = tabs.parents(".tabbed-content").find(".item");
      buttons.removeClass("active");
      item.removeClass("active");
      $(this).addClass("active");
      $(target).addClass("active");
    });
  } else {
    $(".item").on("click", function () {
      var container = $(this).parents(".tabbed-content"),
        currId = $(this).attr("id"),
        items = container.find(".item");
      container.find(".tabs a").removeClass("active");
      items.removeClass("active");
      $(this).addClass("active");
      container.find('.tabs a[href$="#' + currId + '"]').addClass("active");
    });
  }
}




// indicators

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-pills-custom .nav-link');

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove active class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          // Add active class to the clicked link
          this.classList.add('active');
      });
  });
});



// uidemo1

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.course-topics .btn');
  const contentSections = document.querySelectorAll('.content-section');
  const accordionCollapse = document.querySelector('#collapseOne');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedContent = document.getElementById(button.id.replace('btn', '').toLowerCase() + 'Content');
      
      contentSections.forEach(section => {
        section.classList.remove('active');
      });

      if (selectedContent) {
        selectedContent.classList.add('active');
      }

      // Ensure the accordion is open
      if (!accordionCollapse.classList.contains('show')) {
        accordionCollapse.classList.add('show');
      }
    });
  });
});
