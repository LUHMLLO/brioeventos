<template>
  <div id="Dashboard">

    <LiveRightNow/>


  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    LiveRightNow: ()=> import('./components/LiveRightNow'),
    //FeaturedStands: ()=> import('./components/FeaturedStands')
  },
  data(){
    return{

    }
  }
}
</script>
