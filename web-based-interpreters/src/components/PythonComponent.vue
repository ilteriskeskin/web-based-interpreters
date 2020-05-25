<template>
  <div id="app" class="main">
    <div class="container">
      <h1 class="mainTitle">Python Editor</h1>

      <hr />

      <div class="row">
        <div class="col">
          <h5>Girdi</h5>
          <hr />
          <textarea-autosize class="form-control" id="yourcode" v-model="source" :min-height="420"></textarea-autosize>
          <br />
          <button class="btn btn-warning" @click="runit">Çalıştır</button>
        </div>
        <div class="col">
          <h5>Önizleme</h5>
          <hr />
          <pre id="output"></pre>
        </div>
      </div>

      <!-- <iframe
        src="https://trinket.io/embed/python/34362c5a5c"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
      ></iframe>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "PythonComponent",

  data() {
    return {
      source: localStorage.getItem("sourcePython") ? localStorage.getItem("sourcePython"): "print('Hello World!')",
    };
  },

  methods: {
    outf(text) {
      var mypre = document.getElementById("output");
      mypre.innerHTML = mypre.innerHTML + text;
    },
    builtinRead(x) {
      if (
        Sk.builtinFiles === undefined ||
        Sk.builtinFiles["files"][x] === undefined
      )
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles["files"][x];
    },

    // Here's everything you need to run a python program in skulpt
    // grab the code from your textarea
    // get a reference to your pre element for output
    // configure the output function
    // call Sk.importMainWithBody()
    runit() {
      var prog = document.getElementById("yourcode").value;
      var mypre = document.getElementById("output");
      mypre.innerHTML = "";
      Sk.pre = "output";
      Sk.configure({ output: this.outf, read: this.builtinRead });
      (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "mycanvas";
      var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
      });
      myPromise.then(
        function(mod) {
          console.log("success");
        },
        function(err) {
          console.log(err.toString());
        }
      );
      localStorage.setItem('sourcePython', this.source);
    }
  }
};
</script>

<style>
@import "../assets/css/style.css";
</style>
