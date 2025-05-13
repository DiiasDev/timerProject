class Timer {
  constructor() {
    this.iniciar = document.getElementById("iniciar");
    this.pausar = document.getElementById("pausar");
    this.zerar = document.getElementById("zerar");
    this.segundos = 0;
    this.minutos = 0;
    this.horas = 0;
    this.intervalo = null;
    this.rodando = false;

    this.initListeners(); 
  }

  formatarTempo(num) {
    return num.toString().padStart(2, '0');
  }

  atualizarExibicao() {
    const tempoFormatado = `${this.formatarTempo(this.horas)}:${this.formatarTempo(this.minutos)}:${this.formatarTempo(this.segundos)}`;
    document.getElementById("timer").innerText = tempoFormatado
  }

  count = () => {
    this.segundos++;

    if (this.segundos === 60) {
      this.segundos = 0;
      this.minutos++;
    }
    if (this.minutos === 60) {
      this.minutos = 0;
      this.horas++;
    }

    this.atualizarExibicao();
  };

  initListeners() {
    this.iniciar.addEventListener("click", () => {
      if (!this.rodando) {
        this.intervalo = setInterval(this.count, 1000);
        this.rodando = true;
      }
    });

    this.pausar.addEventListener("click", () => {
      clearInterval(this.intervalo);
      this.rodando = false;
    });

    this.zerar.addEventListener("click", () => {
      clearInterval(this.intervalo);
      this.rodando = false;
      this.segundos = 0;
      this.minutos = 0;
      this.horas = 0;
      this.atualizarExibicao();
    });
  }
}

const data = new Timer();
