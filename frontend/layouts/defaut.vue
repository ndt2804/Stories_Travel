<template>
    <div>
        <Header/>
        <navigation  position="fixed"/>
        <main class="container mx-auto">
            <slot />

        </main>
        <Footer/>
    </div>
</template>
<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';


export default {
    name: 'default',
    components: {
        Header,
        Footer
    }
}

</script>