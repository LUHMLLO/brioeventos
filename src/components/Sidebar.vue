<template>
  <div id="sidebar" class="sidebar">
      <div class="sidebar-content">

          <div class="sidebar-section padding-0 h-10">
            <div class="bg-blue w-100 h-100 padding-x-10 text-align-center d-flex flex-center" @click="toggleSidebar">
                <i class="uil uil-bars font-size-25 color-baby-powder"></i>
            </div>
          </div>

          <div class="sidebar-section padding-x-0">
              <router-link :to="'/'+route.name" :class="[routeClasses,actualRouteClasses(route)]" v-for="(route,index) in site_routes" :key="index">
                  <i :class="iconClasses+route.icon"></i>
                  <small :class="fontClasses">{{route.name}}</small>
              </router-link>
          </div>
          <div class="sidebar-section padding-x-0">
              <router-link :to="'/'+route.name" :class="[routeClasses,actualRouteClasses(route)]" v-for="(route,index) in app_routes" :key="index">
                  <i :class="iconClasses+route.icon"></i>
                  <small :class="fontClasses">{{route.name}}</small>
              </router-link>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data(){
        return{
            site_routes:[
                {name:'dashboard',icon:'create-dashboard'},
                {name:'agenda',icon:'schedule'},
                {name:'exhibitors',icon:'podium'},
                {name:'downloads',icon:'download-alt'},
                {name:'survey',icon:'clipboard-alt'},
                {name:'support',icon:'question-circle'},
                {name:'games',icon:'streering'},
            ],
            app_routes:[
                {name:'settings',icon:'setting'},
                {name:'signout',icon:'signout'},
            ],
            routeClasses:'w-100 padding-x-15 padding-y-5 md:d-flex flex-center md:tooltip-wrapper',
            fontClasses: 'font-size-10 text-uppercase tooltip',
            iconClasses: 'tooltip-toggle d-none md:d-inline-block margin-right-10 md:margin-right-0 uil uil-'
        }
    },
    methods:{
        actualRouteClasses: function (route) {
            let routerRoute = this.$route.path
            let vforRoute = '/'+route.name
            return {
                'border-right-solid border-right-blue': routerRoute === vforRoute
            }
        },
    },
}
</script>

<style>

    

</style>