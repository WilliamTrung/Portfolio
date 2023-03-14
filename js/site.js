const navbar = document.querySelector('#navbar');
const threshold = 20;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > threshold && currentScroll > lastScroll) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    alert("Copied: " + $(element).text());
    $temp.remove();
    
  }