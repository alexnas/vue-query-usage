<script setup lang="ts">
import MainViewContainer from '@/views/MainViewContainer.vue'
import { useQuery } from '@tanstack/vue-query'
import PreLoader from '@/components/PreLoader.vue'
import ShowError from '@/components/ShowError.vue'
import ProductsTable from '@/components/products/ProductsTable.vue'

const fetchProducts = async () => {
  return await fetch(`https://dummyjson.com/products?limit=10`).then((res) => res.json())
}

const { data, isError, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts
})

const pageTitle = 'Products Table'
</script>

<template>
  <main-view-container :pageTitle="pageTitle">
    <PreLoader v-if="isLoading" />
    <ShowError v-else-if="isError" />

    <ProductsTable v-else-if="data.products?.length > 0" :products="data.products" />
    <div v-else>There is no any product.</div>
  </main-view-container>
</template>
