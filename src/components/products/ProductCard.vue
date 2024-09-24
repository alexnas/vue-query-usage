<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import BaseModal from '@/components/modal/BaseModal.vue'
import PreLoader from '@/components/PreLoader.vue'

const props = defineProps({
  productId: {
    type: Number || String,
    required: true
  }
})

console.log('first', props.productId)

async function fetchProduct() {
  return await fetch(`https://dummyjson.com/products/${props.productId}`).then((res) => res.json())
}

const { data: product, isLoading } = useQuery({
  queryKey: ['product', props.productId],
  queryFn: fetchProduct
})
</script>

<template>
  <base-modal :modalTitle="product?.title">
    <PreLoader class="max-h-screen" v-if="isLoading" />

    <div class="max-h-screen" v-else-if="product">
      <img class="max-h-60" :src="product?.images[0]" alt="" />

      <div>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}€</p>
      </div>
    </div>
  </base-modal>
</template>
