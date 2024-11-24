const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    loop: true,
  
    // If we need pagination
  
    // Navigation arrows
    navigation: 
    {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  
  });



 
  
  const filters = document.querySelectorAll('.filter-button'); 
  const productContainer = document.querySelector('.tab-content'); 

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      
      productContainer.classList.remove('animate-fade');

      
      void productContainer.offsetWidth; 
      productContainer.classList.add('animate-fade');
    });
  });





  const timerr = ()=>
    {
        const ramadanDay = new Date("2025-03-01T00:00:00").getTime();
        const inday = new Date().getTime();
        const distance = (ramadanDay-inday);
    
        const day = Math.floor(distance / 86400000);
        const hours = Math.floor((distance % 86400000) / 3600000);
        const minutes = Math.floor(((distance % 86400000) % 3600000) / 60000);
        const seconds = Math.floor((((distance % 86400000) % 3600000) % 60000) / 1000);


        document.querySelector(".timer .row").innerHTML = 
        `
            <span> Remaining for discount </span>

            <div class="dicountTime">

                    <div class="day"> day : ${day}</div>
                    <div class="hours"> hours : ${hours} </div>
                    <div class="minutes"> minutes : ${minutes} </div>
                    <div class="seconds"> seconds : ${seconds} </div>
        
            </div>
            

        `;

    }

    setInterval(() => {
        timerr();
    }, 1000);

