<template>
  <div id="sidebar" class="sidebar">
      <div class="sidebar-content">

          <div class="sidebar-section padding-0 h-10">
              <div id="bluebox" class="bg-blue w-100 h-100 text-align-center d-flex flex-center">
                  <i class="uil uil-bars font-size-25 color-baby-powder"></i>
              </div>
          </div>

          <div class="sidebar-section padding-x-0">
              <router-link :to="'/'+route.name" :class="[routeClasses,actualRouteClasses(route)]" v-for="(route,index) in routes" :key="index">
                  <small :class="fontClasses">{{route.name}}</small>
                  <i :class="iconClasses"></i>
              </router-link>
          </div>
          <div class="sidebar-section padding-x-0">
              <router-link to="" :class="routeClasses">
                  <small :class="fontClasses">Settings</small>
                  <i :class="iconClasses"></i>
              </router-link>
              <router-link to="" :class="routeClasses">
                  <small :class="fontClasses">Log-out</small>
                  <i :class="iconClasses"></i>
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
            routes:[
                {name:'dashboard'},
                {name:'agenda'},
                {name:'exhibitors'},
                {name:'downloads'},
                {name:'survey'},
                {name:'support'},
                {name:'games'},
            ],
            routeClasses:'w-100 padding-x-15 padding-y-5 md:d-flex flex-center',
            fontClasses: 'font-size-10 text-uppercase md:d-none',
            iconClasses: 'd-none md:d-block uil uil-home'
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