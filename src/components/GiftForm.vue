<template>
  <form action="">
    <div class="">

      <div class="mb-3">
        <label for="tag">Tag</label>
        <input type="text" v-model="editable.tag" id="tag" name="tag">
      </div>
      <div class="mb-3">
        <label for="Url">Img/Gif Url</label>
        <input type="text" v-model="editable.url" id="url">
      </div>

    </div>
  </form>
</template>


<script lang="ts">
import { ref } from 'vue';
// import { Gift } from '../models/Gift.js';

export default {
  setup() {
    const editable = ref({
      tag: '',
      url: ''
    })
    return {
      editable,
    }
  }
}
</script>


<style lang="scss" scoped></style>