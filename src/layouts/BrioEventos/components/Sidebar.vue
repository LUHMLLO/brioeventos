<template>
  <div class="sidebar">
      <div class="sidebar-content">

          <div class="sidebar-section">
              <div class="image-wrapper height-50">
                  <img src="../assets/logo-square.jpg" alt="">
              </div>
              <SidebarSearch class="margin-y-20 sm:margin-y-50"/>
              <router-link :to="'/'+route.name" :class="[routeClasses,actualRouteClasses(route)]" v-for="(route,index) in site_routes" :key="index">
                  <i :class="[iconClasses,'uil uil-'+route.icon]"></i>
                  <span :class="fontClasses">{{route.name}}</span>
              </router-link>
          </div>

          <div class="sidebar-section">
              <div class="w-100 d-block">
                  <label class="font-bolder font-size-8 color-grey-darken-1 text-uppercase">Extra</label>
              </div>
              <router-link :to="'/'+route.name" :class="[routeClasses,actualRouteClasses(route)]" v-for="(route,index) in app_routes" :key="index">
                  <i :class="[iconClasses,'uil uil-'+route.icon]"></i>
                  <span :class="fontClasses">{{route.name}}</span>
              </router-link>
          </div>

          <div class="sidebar-section padding-0">

              <CurrentEventNotification />

              <Avatar/>
              
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    components:{
        SidebarSearch:()=>import('../widgets/SidebarSearch'),
        Avatar:()=>import('../widgets/Avatar'),
        CurrentEventNotification:()=>import('../widgets/CurrentEventNotification'),
    },
    data(){
        return{
            site_routes:[
                {name:'dashboard',icon:'create-dashboard'},
                {name:'agenda',icon:'schedule'},
                {name:'exhibitors',icon:'podium'},
                {name:'games',icon:'streering'},
            ],
            app_routes:[
                {name:'downloads',icon:'download-alt'},
                {name:'favorites',icon:'heart'},
                {name:'survey',icon:'clipboard-alt'},
                {name:'support',icon:'question-circle'},
            ],
            routeClasses:'w-100 padding-y-5 d-flex align-content-center  round-1',
            fontClasses: 'font-size-8 sm:font-size-20 font-bolder text-uppercase',
            iconClasses: 'font-size-12 sm:font-size-18 d-inline-block margin-right-10'
        }
    },
    methods:{
        actualRouteClasses: function (route) {
            let routerRoute = this.$route.path
            let vforRoute = '/'+route.name
            return {
                'bg-blue-darken-4 padding-x-10 color-baby-powder depth-1-blue-darken-4': routerRoute === vforRoute,
            }
        },
    },
}
</script>

<style>

    

</style>