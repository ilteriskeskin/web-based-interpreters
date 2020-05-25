<template>
  <div id="app" class="main">
    <div class="container">
      <h1 class="mainTitle">Python Editor</h1>
      <p>Yazdığınız kodların çıktısını görmek için lütfen Web Konsolu açın.</p>
      <ul>
        <li>Mozilla Firefox için: Ctrl+Shift+K</li>
        <li>Google Chrome için: Ctrl+Shift+i</li>
      </ul>
      <p>
        <code>Dikkat:</code> Python bildiğiniz gibi girintiye duyarlı bir dil. Aşağıda kodlarınızı yazdığınız kutucuğa da girintiye
        dikkat ederek yazmanız gerekmektedir.
      </p>

      <hr />

      <div class="row">
        <div class="col">
          <h5>Girdi</h5>
          <hr />
          <textarea-autosize class="form-control" id="yourcode" v-model="source" :min-height="420"></textarea-autosize>
          <br />
          <button class="btn btn-warning" @click="runit">Çalıştır</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PythonComponent",

  data() {
    return {
      source: localStorage.getItem("sourcePython")
        ? localStorage.getItem("sourcePython")
        : "print('Hello World!')",
      output: ""
    };
  },

  created() {
    console.log(
      "***************************************************************************"
    );
    console.log("Welcome Python Editor");
    console.log(
      "***************************************************************************"
    );
  },

  methods: {
    runit() {
      console.log(
        "%c ************************* OUTPUT *************************",
        "background: #303960; color: #f8b24f"
      );
      pyodide.runPython(this.source);
    }
  }
};
</script>

<style>
@import "../assets/css/style.css";
</style>
