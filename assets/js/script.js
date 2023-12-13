

function cronometro() {
    // Selecionando os elementos HTML
    const cronometro = document.querySelector('.cronometro');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
  
    let tempoTotal = 0; // Inicializando o tempo total
    let timer;
  
    // Função para criar a representação formatada do tempo
    function criarTempoFormatado(tempo) {
      const centesimas = Math.floor((tempo % 1000) / 10).toString().padStart(2, '0');
      const segundos = Math.floor((tempo / 1000) % 60).toString().padStart(2, '0');
      const minutos = Math.floor((tempo / (1000 * 60)) % 60).toString().padStart(2, '0');
      const horas = Math.floor(tempo / (1000 * 60 * 60)).toString().padStart(2, '0');
      return `${horas}:${minutos}:${segundos}.${centesimas}`;
    }
  
    // Função para atualizar o cronômetro na página
    function atualizarCronometro() {
      cronometro.innerHTML = criarTempoFormatado(tempoTotal);
    }
  
    // Função para iniciar o cronômetro
    function iniciarCronometro() {
      timer = setInterval(function () {
        tempoTotal += 10; // Incremento a cada 10 milissegundos
        atualizarCronometro();
      }, 10);
    }
  
    // Evento de clique no botão "Iniciar"
    iniciar.addEventListener('click', function (event) {
      cronometro.classList.remove('pausado'); // Removendo a classe "pausado"
      clearInterval(timer); // Limpando qualquer intervalo anterior
      iniciarCronometro();
    });
  
    // Evento de clique no botão "Pausar"
    pausar.addEventListener('click', function (event) {
      clearInterval(timer); // Pausando o intervalo
      cronometro.classList.add('pausado'); // Adicionando a classe "pausado"
    });
  
    // Evento de clique no botão "Zerar"
    zerar.addEventListener('click', function (event) {
      cronometro.classList.remove('pausado'); // Removendo a classe "pausado"
      clearInterval(timer); // Limpando qualquer intervalo anterior
      cronometro.innerHTML = '00:00:00.00'; // Resetando o cronômetro na página
      tempoTotal = 0; // Resetando o tempo total
    });
  }
  
  cronometro();
  