document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  menuToggle.addEventListener('click', function() {
    menuItems.classList.toggle('show');
  });
});

{
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
  ],
  "rewrites"; [
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
  ]
}
