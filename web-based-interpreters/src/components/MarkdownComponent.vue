<template>
  <div id="app" class="main">
    <div class="container">
      <h1 class="mainTitle">Markdown Editor</h1>

      <hr />

      <div class="row">
        <div class="col">
          <h5>Girdi</h5>
          <hr />
          <textarea-autosize
            class="form-control"
            ref="myTextarea"
            v-model="source"
            :min-height="420"
          />
          <br />
          <button class="btn btn-warning" @click="save">Kaydet</button>
        </div>
        <div class="col">
          <h5>Önizleme</h5>
          <hr />
          <vue-simple-markdown :source="source"></vue-simple-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkdownComponent",
  data() {
    return {
      source: localStorage.getItem("sourceMarkdown") ? localStorage.getItem("sourceMarkdown"): "# Hello World!",
    };
  },

  methods: {
    save() {
      localStorage.setItem("sourceMarkdown", this.source);
    }
  }
};
</script>

<style>
@import "../assets/css/style.css";
</style>
