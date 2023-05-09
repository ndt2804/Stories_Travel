<script setup lang="ts">
    import useStories from '@/composables/useStories';
    const { data, pending, error } = useStories();
    var products = [ {
        id: 1,
        name: 'Blue Lock',
        image: 'https://product.hstatic.net/1000376556/product/bluelock_-_tap_4_-_card_pvc_6e3902ea03924a149779b74c5f781b39_large.jpg',
    },
    {
        id: 2,
        name: 'Spy Room',
        image: 'https://product.hstatic.net/1000376556/product/bia_spyroom_tap_6_bia_1_66d0f825ab1e479581d48c6ad4b52833_large.jpg',
    },
    {
        id: 3,
        name: 'Kỳ Án Siêu Nhiên',
        image: 'https://product.hstatic.net/1000376556/product/nxbtre_full_30282023_042812_264d2480be674c2ca28b080fd12e8e34_large.jpg',
    },
    {
        id: 4,
        name: 'Blue Lock',
        image: 'https://product.hstatic.net/1000376556/product/bluelock_-_tap_4_-_card_pvc_6e3902ea03924a149779b74c5f781b39_large.jpg',
    },
    {
        id: 5,
        name: 'Blue Lock',
        image: 'https://product.hstatic.net/1000376556/product/bluelock_-_tap_4_-_card_pvc_6e3902ea03924a149779b74c5f781b39_large.jpg',
    },
    {
        id: 6,
        name: 'Blue Lock',
        image: 'https://product.hstatic.net/1000376556/product/bluelock_-_tap_4_-_card_pvc_6e3902ea03924a149779b74c5f781b39_large.jpg',
    },
    {
    "id": 1045954994,
    "name": "Kỳ Án Siêu Nhiên Tập 10",
    "image": "https://product.hstatic.net/1000376556/product/nxbtre_full_30282023_042812_264d2480be674c2ca28b080fd12e8e34_large.jpg",
    "url": "https://www.hikaru.vn/products/ky-an-sieu-nhien-tap-10",
    "price": 35000,
    "original_price": 35000,
    "discount": 0
  },
  {
    "id": 1045954904,
    "name": "Shaman King Tập 29",
    "image": "https://product.hstatic.net/1000376556/product/nxbtre_full_20542023_085449_e84b5de3c218414eb8126ed7c292245a_large.jpg",
    "url": "https://www.hikaru.vn/products/shaman-king-tap-29",
    "price": 35000,
    "original_price": 35000,
    "discount": 0
  },
  {
    "id": 1045954886,
    "name": "Fire Force Tập 2",
    "image": "https://product.hstatic.net/1000376556/product/nxbtre_full_23382023_103808_05f03700c5de4bf8a316af15b66d9029_large.jpg",
    "url": "https://www.hikaru.vn/products/fire-force-tap-2",
    "price": 43000,
    "original_price": 43000,
    "discount": 0
  },
  {
    "id": 1045954820,
    "name": "Kingdom Tập 46",
    "image": "https://product.hstatic.net/1000376556/product/nxbtre_full_20572023_085723_6ef3469ebffb4f259038d1b57ee48060_large.jpg",
    "url": "https://www.hikaru.vn/products/kingdom-tap-46",
    "price": 45000,
    "original_price": 45000,
    "discount": 0
  },
  {
    "id": 1045848032,
    "name": "Boxset Wish",
    "image": "https://product.hstatic.net/1000376556/product/boxset_wish__clamp__-_mockup_a966c8dac5d2400497eaa966bbe90904_large.png",
    "url": "https://www.hikaru.vn/products/boxset-wish",
    "price": 200000,
    "original_price": 200000,
    "discount": 0
  },
  {
    "id": 1045848005,
    "name": "Yu-Gi-Oh! GX Tập 7: Sức Mạnh Thật Sự Của Nhà Vua!!",
    "image": "https://product.hstatic.net/1000376556/product/yu-gi-oh__gx_-_tap_7_-_suc_manh_that_su_cua_nha_vua_ebd45409e24f4295ad3fa659c86ba43d_large.jpg",
    "url": "https://www.hikaru.vn/products/yu-gi-oh-gx-tap-7-suc-manh-that-su-cua-nha-vua",
    "price": 30000,
    "original_price": 30000,
    "discount": 0
  },

       
    ]
</script>
<template>
    <div v-if="!pending">
        <div v-if="error">
            <p>{{ error }}</p>
        </div>
        <div v-else>
            <!-- <div v-if="data && data.products && data.products.length > 0"> -->
            <div class="mb-12 flex h-96 items-center justify-center">
                <h2 class="text-3xl font-bold">Chuyện kể những chuyến đi</h2>
            </div>
            <div class="container mx-auto px-6">
                <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <li
                        v-for="product in products " :key="product.id"
                        class="relative transform hover:scale-105 transition ease-in-out duration-500 rounded-2xl h-fit shadow-md bg-zinc-100 overflow-hidden  dark:bg-zinc-700 hover:shadow-lg"
                        > 
                        <a :href="product.name" target="_blank" rel="noopener noreferrer">
                            <img
                                class="relative h-full w-full object-cover object-top rounded-md shadow-lg"
                                :src="product.image"
                                :alt="product.name"
                            /> 
                            <div class="p-6 font-bold">
                                <p>
                                    {{ product.name}}
                                </p>
                                <p class="mt-3">
                                    <span class="text-primary">
                                        <!-- {{ product.price }} -->
                                    </span>    
                                </p>
                            </div>        
                        </a>
                    </li>   
                </ul>
            </div>
        </div>
        </div>
        <div v-else class="mb-12 flex h-96 items-center justify-center">
            <p class="text-3xl font-bold">No products found</p>
        </div>
    <!-- </div> -->
    <div v-else class="mb-12 flex h-96 items-center justify-center">
      <p class="text-3xl font-bold">Loading...</p>
    </div>
</template>


  

  
  