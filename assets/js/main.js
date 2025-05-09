(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo2.svg";
    } else {
      logo.src = "assets/images/logo/logo1.svg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // ===== submenu
  const submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  });

  // ===== wow js
  new WOW().init();

 // === quiz
 document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quiz-form');
  const result = document.getElementById('quiz-result');
  const solution = document.getElementById('quiz-solution');
  const scoreOutput = document.getElementById('score');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    
      const answers = {
        q1: 'D',
        q2: 'B',
        q3: 'A',
        q4: 'D',
        q5: 'C',
        q6: 'B',
        q7: 'D',
        q8: 'D',
        q9: 'E',
        q10: 'E'
      };
    
      const warningMessage = document.getElementById('warning-message');
      let allAnswered = true;
    
      for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (!selected) {
          allAnswered = false;
          break;
        }
      }
    
      if (!allAnswered) {
        warningMessage.style.display = 'block';
        return;
      } else {
        warningMessage.style.display = 'none';
      }
    
      let score = 0;
      let correct = 0;
      let incorrect = 0;
      const formData = new FormData(form);
    
      for (let [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
          score++;
          correct++;
        } else {
          incorrect++;
        }
        
        // Tampilkan semua pembahasan
        // jangan tampilkan otomatis, cukup disiapkan dengan tombol saja
        
      }
    
      form.style.display = 'none';
      solution.style.display = 'block';
    
      const scoreSection = document.getElementById('quiz-result-section');
      const userScore = document.getElementById('quiz-user-score');
      const correctCount = document.getElementById('quiz-correct-count');
      const incorrectCount = document.getElementById('quiz-incorrect-count');
    
      userScore.textContent = `Skor Anda: ${score * 10} / 100`;
      correctCount.textContent = `Jawaban Benar: ${correct}`;
      incorrectCount.textContent = `Jawaban Salah: ${incorrect}`;
      scoreSection.style.display = 'block';
    });    
  }
});

// Toggle pembahasan soal saat tombol diklik
document.querySelectorAll('.solution-btn').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = button.getAttribute('data-target');
    const solution = document.getElementById(targetId);
    if (solution) {
      const isVisible = solution.style.display === 'block';
      solution.style.display = isVisible ? 'none' : 'block';
    }
  });
});




  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();
