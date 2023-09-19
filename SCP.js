const title = document.getElementById('title');


fetch('SCP.json')
  .then(response => response.json())
  .then(SCP => {
    SCP.forEach(subject => {
      const name = document.createElement('h1');
      name.innerHTML = subject.subject;

      const classCss = subject.Class.toLowerCase(); 
      name.classList.add('subject-title');

      const Class = document.createElement('h2');
      Class.innerHTML = `Object Class: ${subject.Class}`;
      Class.classList.add(classCss); 

      const containment = document.createElement('p');
      containment.innerHTML = `<h3>Containment Info:</h3> ${subject.Containment_sum}`;

      const description = document.createElement('p');
      description.innerHTML = `<h3>Description Info:</h3> ${subject.Description_sum}<br>`;
      

      const button = document.createElement('button');
      button.textContent = "Read Subject";
      button.classList.add('btn');
      
      button.addEventListener('click', () => {
      const textToSpeak = `${subject.subject}. Object Class: ${subject.Class}. Containment Info: ${subject.Containment_sum}. Description Info: ${subject.Description_sum}`;
      const read = new SpeechSynthesisUtterance(textToSpeak);
      window.speechSynthesis.speak(read);
      });

      title.appendChild(button);
      title.appendChild(name);
      title.appendChild(Class);
      title.appendChild(containment);
      title.appendChild(description);


    });
});

const returnToTopButton = document.getElementById("returnToTopButton");

returnToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Use smooth scrolling animation
    });
});

