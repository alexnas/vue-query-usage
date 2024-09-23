<script setup lang="ts">
import type { PropType } from 'vue'
import type { IProduct, IProducTableCol } from '@/types'

defineProps({
  products: {
    type: Array as PropType<IProduct[]>,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  }
})

const productTableCols: IProducTableCol[] = [
  { field: 'id', title: 'Id' },
  { field: 'title', title: 'Title' },
  { field: 'description', title: 'Description' },
  { field: 'category', title: 'Category' },
  { field: 'price', title: 'Price' },
  { field: 'rating', title: 'Rating' },
  { field: 'brand', title: 'Brand' }
]
</script>

<template>
  <h2 v-if="title.trim()" class="table-title">{{ title }}</h2>

  <!-- SEARCH -->
  <div class="my-3 w-fit bg-white px-2 pb-4 dark:bg-gray-600">
    <label for="table-search">Search</label>
    <div class="relative mt-1 flex">
      <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <svg
          class="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search"
        class="block w-80 rounded-lg border border-gray-300 bg-gray-50 pb-2 ps-10 pt-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search for items"
      />
    </div>
  </div>

  <!-- TABLE -->
  <div v-if="products && products.length > 0" class="relative w-full shadow-md sm:rounded-lg">
    <table class="relative table-auto text-left text-sm text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            <div>Image</div>
          </th>

          <th
            v-for="tableCol in productTableCols"
            :key="tableCol.field"
            scope="col"
            class="px-6 py-3"
          >
            <div>{{ tableCol.title }}</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div>Action</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
          class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
        >
          <td class="px-6 py-4">
            <div>
              <img
                :src="`${product.thumbnail}`"
                class="h-auto min-w-32 rounded-lg"
                alt="Product View"
              />
            </div>
          </td>

          <td v-for="tableCol in productTableCols" :key="tableCol.field" class="px-6 py-4">
            {{ product[`${tableCol.field}`] }}
          </td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
