document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  menuToggle.addEventListener('click', function() {
    menuItems.classList.toggle('show');
  });
});

{
  "rewrites"; [
    {
      "source": "/",
      "destination": "/index.html"
    },
    {
      "source": "/profile",
      "destination": "/profile.html"
    },
    {
      "source": "/publication",
      "destination": "/publication.html"
    },
    {
      "source": "/contact",
      "destination": "/contact.html"
    }
  ],
  "redirects"; [
    {
      "source": "/index.html",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/profile.html",
      "destination": "/profile",
      "permanent": true
    },
    {
      "source": "/publication.html",
      "destination": "/publication",
      "permanent": true
    },
    {
      "source": "/contact.html",
      "destination": "/contact",
      "permanent": true
    }
  ]
}
document.addEventListener('DOMContentLoaded', function() {
  console.log('script.js is loaded');
  // 他のコードがここに続きます
});
