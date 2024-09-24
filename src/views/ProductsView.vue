<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import type { IProduct } from '@/types'
import { useModalStore } from '@/stores/modal'
import MainViewContainer from '@/views/MainViewContainer.vue'
import PreLoader from '@/components/PreLoader.vue'
import ShowError from '@/components/ShowError.vue'
import ProductsTable from '@/components/products/ProductsTable.vue'
import ProductCard from '@/components/products/ProductCard.vue'

const modalStore = useModalStore()
const { isModalActive } = storeToRefs(modalStore)

const fetchProducts = async () => {
  return await fetch(`https://dummyjson.com/products?limit=10`).then((res) => res.json())
}

const { data, isError, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts
})

const pageTitle = 'Products Table'
const selectedProduct: Ref<IProduct | null> = ref(null)

const onSelect = (product: IProduct) => {
  selectedProduct.value = product
  isModalActive.value = true
}
</script>

<template>
  <main-view-container :pageTitle="pageTitle">
    <ProductCard v-if="selectedProduct && isModalActive" :product="selectedProduct" />
    <PreLoader v-if="isLoading" />
    <ShowError v-else-if="isError" />

    <div v-else-if="data.products?.length > 0">
      <ProductsTable :products="data.products" @select="onSelect" />
    </div>
    <div v-else>There is no any product.</div>
  </main-view-container>
</template>
