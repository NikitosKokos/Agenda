document.addEventListener('DOMContentLoaded', () => {
   const header = document.querySelector('.header');

   const callback = function (entries, observer){
      if(entries[0].isIntersecting){
         header.classList.remove('scroll');
      }else{
         header.classList.add('scroll');
      }
   }

   const headerObserver = new IntersectionObserver(callback);
   headerObserver.observe(header);

   const videoLink = document.getElementById('video');
   const popup = document.querySelector('.popup');
   const video = document.querySelector('.popup__video');
   videoLink.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.add('show');
      video.play();
   });

   popup.addEventListener('click', () => {
      popup.classList.remove('show');
      video.pause();
   });

}); // end