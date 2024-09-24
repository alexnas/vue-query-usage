<script lang="ts" setup>
import type { PropType } from 'vue'
import type { IProduct } from '@/types'
import BaseModal from '@/components/modal/BaseModal.vue'

defineProps({
  product: {
    type: Object as PropType<IProduct | null>,
    default: null
  },
  title: {
    type: String
  }
})
</script>

<template>
  <base-modal :modalTitle="product?.title">
    <div class="max-h-screen" v-if="product">
      <img class="max-h-60" :src="product?.images[0]" alt="" />

      <div>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}€</p>
      </div>
    </div>
  </base-modal>
</template>
