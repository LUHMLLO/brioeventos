<template>
    <section class="margin-bottom-50">

        <h6 class="margin-bottom-15">Featured</h6>

        
        <div class="row row-adjust">

            <div class="col-3 md:col-6 md:margin-bottom-15 sm:col-12" v-for="(card,index) in cards" :key="index">
                <router-link to="">
                    <Card/>
                </router-link>
            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'promoted',
    data(){
        return{

            cards: [
                {
                    status: 'live',
                    name: '5G network revolution',
                },
                {
                    status: 'live',
                    name: '5G network revolution',
                },
                {
                    status: 'finished',
                    name: '5G network revolution',
                },
                {
                    status: 'finished',
                    name: '5G network revolution',
                },
            ]

        }
    },
}
</script>