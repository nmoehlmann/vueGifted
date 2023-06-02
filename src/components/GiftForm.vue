<template>
  <form action="" @submit.prevent="postGift()">
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
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js';
// import { Gift } from '../models/Gift.js';

export default {
  setup() {
    const editable = ref({
      tag: '',
      url: ''
    })
    return {
      editable,
      async postGift() {
        try {
          logger.log('submitting gift form')
          const formData = editable.value
          await giftsService.postGift(formData)
        } catch (error) {
          Pop.error(error.message)
          logger.log(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>