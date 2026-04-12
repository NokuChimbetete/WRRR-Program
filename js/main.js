/* ============================================================
   Main Interactivity
   - Bio modal (open / close)
   - Photo carousel builder
   ============================================================ */

(function () {
  'use strict';

  /* ----- DOM refs ----- */
  const modal         = document.getElementById('modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalPortraits = document.getElementById('modal-portraits');
  const modalRole     = document.getElementById('modal-role');
  const modalName     = document.getElementById('modal-name');
  const modalBio1     = document.getElementById('modal-bio1');
  const modalBio2     = document.getElementById('modal-bio2');
  const carouselEl    = document.getElementById('carousel');


  /* ========================================================
     Modal
     ======================================================== */

  function openModal(personKey) {
    const data = TEAM[personKey];
    if (!data) return;

    /* Build portrait thumbnails */
    modalPortraits.innerHTML = data.portraits
      .map(function (file) {
        return '<img src="Images/Potraits/' + file + '" alt="">';
      })
      .join('');

    modalRole.textContent = data.role;
    modalName.textContent = data.name;
    modalBio1.textContent = data.bio1;
    modalBio2.textContent = data.bio2;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
  }

  /* Close on backdrop click */
  modalBackdrop.addEventListener('click', closeModal);

  /* Close on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* Attach click listeners to every portrait */
  const portraits = document.querySelectorAll('[data-person]');
  portraits.forEach(function (el) {
    el.addEventListener('click', function () {
      openModal(el.getAttribute('data-person'));
    });
  });


  /* ========================================================
     Carousel Builder
     ========================================================
     Groups photos into cards of 3:
       - 2 small images stacked on one side
       - 1 large image on the other side
     Alternates which side is large/small for variety.
     ======================================================== */

  function buildCarousel() {
    if (!carouselEl || !CAROUSEL_PHOTOS) return;

    const basePath = 'Images/CarouselPhotos/';
    let html = '';

    for (let i = 0; i < CAROUSEL_PHOTOS.length; i += 3) {
      const a = CAROUSEL_PHOTOS[i];
      const b = CAROUSEL_PHOTOS[i + 1];
      const c = CAROUSEL_PHOTOS[i + 2];

      /* If fewer than 3 remain, show a single large image */
      if (!b || !c) {
        html +=
          '<div class="carousel-card">' +
            '<div class="col-large">' +
              '<img src="' + basePath + a + '" alt="" loading="lazy">' +
            '</div>' +
          '</div>';
        continue;
      }

      const groupIndex = Math.floor(i / 3);
      const flipped = groupIndex % 2 === 1;

      if (flipped) {
        /* Large left, small right */
        html +=
          '<div class="carousel-card">' +
            '<div class="col-large">' +
              '<img src="' + basePath + a + '" alt="" loading="lazy">' +
            '</div>' +
            '<div class="col-small">' +
              '<img src="' + basePath + b + '" alt="" loading="lazy">' +
              '<img src="' + basePath + c + '" alt="" loading="lazy">' +
            '</div>' +
          '</div>';
      } else {
        /* Small left, large right */
        html +=
          '<div class="carousel-card">' +
            '<div class="col-small">' +
              '<img src="' + basePath + a + '" alt="" loading="lazy">' +
              '<img src="' + basePath + b + '" alt="" loading="lazy">' +
            '</div>' +
            '<div class="col-large">' +
              '<img src="' + basePath + c + '" alt="" loading="lazy">' +
            '</div>' +
          '</div>';
      }
    }

    carouselEl.innerHTML = html;
  }

  buildCarousel();

})();
