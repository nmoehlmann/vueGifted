<template>
  <main class="container-fluid">

    <section class="row">
      <div class="col-12 d-flex flex-column align-items-center">
        <GiftForm />
      </div>
    </section>

    <section class="row">


      <div v-for="g in gifts" :key="g.id" class="col-md-4">
        <GiftCard :giftProp="g" />
      </div>

    </section>
  </main>
</template>


<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { giftsService } from "../services/GiftsService.js"
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import GiftCard from '../components/GiftCard.vue'
import GiftForm from '../components/GiftForm.vue'

export default {
  components: { GiftCard, GiftForm },
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }

    onMounted(() => {
      getGifts()
    })

    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>


<style></style>