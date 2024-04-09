const form = document.getElementById('numero-Form');

document.getElementById('numero-Form').addEventListener('submit', function(e) {
    e.preventDefault(e);
  
    const CampoA = document.getElementById('CampoA');
    const CampoB = document.getElementById('CampoB');
    const message = document.getElementById('message');
  
    if (CampoB.value > CampoA.value) {
      message.textContent = 'Formulario é valido. Campo B é maior que Campo A.';
      message.style.color = 'green';
    } else {
      message.textContent = 'Formulario é invalido. Campo B deve ser maior que Campo A.';
      message.style.color = 'red';
    }
  });

  console.log(form);