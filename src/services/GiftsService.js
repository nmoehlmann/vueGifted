import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
  async postGift(formData) {
    const gift = 
  }
  async openCloseGift(id) {
    // logger.log('FLIPPING BOOL')
    const gift = AppState.gifts.find(g => g.id == id)
    gift.opened = !gift.opened
    logger.log('flipping bool in AppState', gift.opened)

    const res = await api.put(`api/gifts/${id}`, gift)
    logger.log('res.data for gift', res.data)

  }

  async getGifts() {
    const res = await api.get('api/gifts')
    // logger.log('[GETTING GIFTS]', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))

    logger.log('AppState gifts', AppState.gifts)
  }
}

export const giftsService = new GiftsService()