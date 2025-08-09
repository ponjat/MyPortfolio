document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  new Typed("#typed", {
  strings: ["Passionate Software Developer"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });
  AOS.init({
    duration: 1000, 
    once: true     
  });


  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      const cards = document.querySelectorAll('.project-card');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Optional: Highlight active button
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-[#F57500]', 'text-white');
        btn.classList.add('bg-gray-800');
      });
      button.classList.add('bg-[#F57500]', 'text-white');
      button.classList.remove('bg-gray-800');
    });
  });