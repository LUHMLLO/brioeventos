<template>
  <div id="app">    
    <component :is="this.layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      layout: 'Layout_BrioEventos'
    }
  },
}
</script>