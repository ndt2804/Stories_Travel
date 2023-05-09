// TODO: type SearchResult and SearchResponse from `Quang19992/momoka` GraphQL api

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    url: string,
    original_price: number,
    discount: number
  }
  
  interface ProductResponse {
    value: Product[];
  }
  
  export default function useStories() {
    const data = ref<ProductResponse | null>(null);
    const error = ref();
    const pending = ref<Boolean>();
  
    async function doFetch() {
      const res = await useFetch<ProductResponse>(
        ''
      );
  
      data.value = res.data.value || null;
      pending.value = res.pending.value;
      error.value = res.error.value;
    }
    doFetch();
    return { data, pending, error };
  }
  