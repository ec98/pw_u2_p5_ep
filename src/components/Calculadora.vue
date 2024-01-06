<template>
  <div>
    <section>
      <div class="container">
        <div class="calculadora">
          <div id="idresult" class="display">{{ resultado }}</div>
          <button id="btnC" @click="resetNumeros()">&#8705;</button>
          <button @click="resetDigits()">←</button>
          <button @click="operacionDivision()">/</button>
          <button id="id7" @click="numero('7')">7</button>
          <button id="id8" @click="numero('8')">8</button>
          <button id="id9" @click="numero('9')">9</button>
          <button @click="operacionMultiplicacion()">&#215;</button>
          <button id="id4" @click="numero('4')">4</button>
          <button id="id5" @click="numero('5')">5</button>
          <button id="id6" @click="numero('6')">6</button>
          <button @click="operacionResta()">&#8722;</button>
          <button id="id1" @click="numero('1')">1</button>
          <button id="id2" @click="numero('2')">2</button>
          <button id="id3" @click="numero('3')">3</button>
          <button @click="operacionSuma()">&#43;</button>
          <button id="id0" @click="numero('0')">0</button>
          <button @click="addDecimal()">&#46;</button>
          <button @click="igualResult()">&#61;</button>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      numero1: "0",
      numero2: null,
      operaciones: null,
      resultado: "0",
    };
  },
  methods: {
    resetNumeros() {
      this.numero1 = "0";
      this.numero2 = null;
      this.operaciones = null;
      this.resultado = "0";
    },
    operacionDivision() {
      this.operaciones = "/";
    },
    operacionMultiplicacion() {
      this.operaciones = "x";
    },
    operacionResta() {
      this.operaciones = "-";
    },
    operacionSuma() {
      this.operaciones = "+";
    },
    resetDigits() {
      if (this.operaciones === null) {
        this.numero1 = this.numero1.length > 1 ? this.numero1.slice(0, -1) : "0";
        this.updateNumber();
      }
    },
    addDecimal() {
      if (this.operaciones === null) {
        if (!this.numero1.includes(".")) {
          this.numero1 += ".";
        }
      } else {
        if (this.numero2 === null) {
          this.numero2 = "0.";
        } else if (!this.numero2.includes(".")) {
          this.numero2 += ".";
        }
      }
      this.updateNumber();
    },
    igualResult() {
      if (this.operaciones !== null) {
        const num1 = parseFloat(this.numero1);
        const num2 = parseFloat(this.numero2);
        switch (this.operaciones) {
          case "+":
            this.resultado = (num1 + num2).toString();
            break;
          case "-":
            this.resultado = (num1 - num2).toString();
            break;
          case "x":
            this.resultado = (num1 * num2).toString();
            break;
          case "/":
            if (num2 !== 0) {
              this.resultado = (num1 / num2).toString();
            } else {
              throw new Error("No se permite la division por 0");
            }
            break;
        }
        this.numero1 = this.resultado;
        this.numero2 = null;
        this.operaciones = null;
      }
    },
    numero(digito) {
      if (this.operaciones === null) {
        this.numero1 = this.numero1 === "0" ? digito : this.numero1 + digito;
      } else {
        this.numero2 = this.numero2 === null ? digito : this.numero2 + digito;
      }
      this.updateNumber();
    },
    updateNumber() {
      if (this.numero1 === "0" && this.numero2 === null) {
        this.resultado = "0";
      } else if (this.operaciones === null) {
        this.resultado = this.numero1;
      } else if (this.numero2 === null) {
        this.resultado = this.numero1;
      }
    },
  },
};
</script>
    
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculadora {
  display: grid;
  /* grid-template-columns: 75px 75px 75px 75px 75px; columnas respectivas */
  grid-template-columns: repeat(
    4,
    75px
  ); /*tambien podemos colocar columnas quemadas inicio-final*/
  grid-template-rows: 150px repeat(5, 75px);
  background-color: #00916e;
  padding: 10px; /*se aleja dentro del contorno*/
  margin: 30px; /*se aleja fuera de los elementos*/
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px #00000033;
}
.display {
  grid-column: span 4;
  padding: 15px;
  margin: 10px 10px 20px 10px;
  background-color: #363636b7;
  border-radius: 32px;
  color: white;
  text-align: right;
  box-shadow: 0px 0px 0px 10px #00000033;
}
button {
  cursor: pointer;
  margin: 5px;
  padding: 0px;
  border-radius: 32px;
  border: none;
  background-color: #00916e;
  box-shadow: 5px 5px 10px 2px #00000040;
  font-size: 20px;
}
/* button:hover{
        background-color: #363636;
    } */
button:active {
  background-color: #006f54;
}
button:hover {
  background-color: #4657f1;
}
#btnC {
  grid-column: span 2;
}
#id0 {
  grid-column: span 2;
}
body {
  background: #82b4ea;
}
* {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>