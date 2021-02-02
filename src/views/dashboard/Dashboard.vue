<template>
  <div id="Dashboard">

    <RecentLiveStreams/>
    <FeaturedStands/>


  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    RecentLiveStreams: ()=> import('./components/RecentLiveStreams'),
    FeaturedStands: ()=> import('./components/FeaturedStands')
  }
}
</script>
