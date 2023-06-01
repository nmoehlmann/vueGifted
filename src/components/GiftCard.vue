<template>
  <div @click="openCloseGift()">
    <img class="img-fluid" :src="giftProp?.url" alt="">
    <h1>{{ giftProp?.tag }}</h1>
  </div>
</template>


<script lang="ts">

import { Gift } from '../models/Gift.js'
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {

  props: {
    giftProp: { type: Gift, required: true }
  },

  setup(props) {
    return {
      async openCloseGift() {
        try {
          await giftsService.openCloseGift(props.giftProp.id)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>