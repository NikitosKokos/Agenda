let spollers = document.querySelectorAll('[data-spoller]');
if (spollers.length > 0) {
   let isReadyToChange = true;

   function initSpollers(spoller) {
      if (spoller.classList.contains('_spoller-992') && window.innerWidth < 992) {
         spoller.classList.add('_init');
      } else if (spoller.classList.contains('_spoller-768') && window.innerWidth < 768) {
         spoller.classList.add('_init');
      } else {
         spoller.classList.remove('_init');
      }
   }

   for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];

      if (spoller.hasAttribute('data-active')) {
         spoller.classList.add('_active');
      } else {
         _slideUp(spoller.nextElementSibling, 400);
      }

      spoller.addEventListener('click', function (e) {
         if (isReadyToChange) {
            if (spoller.hasAttribute('data-992') && window.innerWidth > 992) {
               return false;
            }
            if (spoller.hasAttribute('data-768') && window.innerWidth > 768) {
               return false;
            }
            if (spoller.closest('[data-spollers]')) {
               let curent_spollers = spoller
                  .closest('[data-spollers]')
                  .querySelectorAll('[data-spoller]');
               for (let i = 0; i < curent_spollers.length; i++) {
                  let el = curent_spollers[i];
                  if (el != spoller) {
                     el.classList.remove('_active');
                     _slideUp(el.nextElementSibling, 400);
                  }
               }
            }

            spoller.classList.toggle('_active');
            _slideToggle(spoller.nextElementSibling, 400);
            isReadyToChange = false;

            setTimeout(() => {
               isReadyToChange = true;
            }, 400);
         }
      });

      initSpollers(spoller);

      window.addEventListener('resize', () => initSpollers(spoller));
   }
}
