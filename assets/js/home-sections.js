(function () {
  "use strict";

  var homePanel = document.getElementById("home-panel");
  var blogPanel = document.getElementById("blog-panel");

  if (!homePanel || !blogPanel) {
    return;
  }

  var sectionLinks = document.querySelectorAll("[data-home-section-link]");

  function sectionFromLocation() {
    return window.location.hash === "#blog" ? "blog" : "home";
  }

  function showSection(section, updateHistory) {
    var showBlog = section === "blog";

    homePanel.hidden = showBlog;
    blogPanel.hidden = !showBlog;

    Array.prototype.forEach.call(sectionLinks, function (link) {
      var isActive = link.getAttribute("data-home-section-link") === section;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (updateHistory) {
      window.history.pushState(null, "", showBlog ? "#blog" : "#home");
      window.scrollTo(0, 0);
    }
  }

  Array.prototype.forEach.call(sectionLinks, function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showSection(link.getAttribute("data-home-section-link"), true);
    });
  });

  window.addEventListener("popstate", function () {
    showSection(sectionFromLocation(), false);
  });

  showSection(sectionFromLocation(), false);
}());
