<template>
  <div id="Dashboard">

    <RecentLiveStreams/>
    <promoted/>


  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    RecentLiveStreams: ()=> import('./components/RecentLiveStreams'),
    promoted: ()=> import('./components/promoted')
  }
}
</script>
