<template>
  <div class="navbar">
            

      <div class="navbar-content">
          
          
          <div class="navbar-section">
              <i class="uil uil-bars margin-right-25 font-size-20" @pointerdown="toggleSidebar"></i>
          </div>
          
          <div class="navbar-section">
              
                <router-link :to="'/'+icon.name" :class="[ navRoutesClasses , icon.class ]" v-for="(icon,index) in navIcons" :key="index">
                    <i :class="['uil uil-'+icon.icon,navIconsClasses]"></i>
                </router-link>

          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            navIcons:[
                {
                    name: 'search', 
                    icon: 'search', 
                    class: ''
                },
                {
                    name: 'notifications', 
                    icon: 'bell',
                    class: ''
                },
                {
                    name: 'inbox', 
                    icon: 'comments-alt',
                    class: ''
                }
            ],
            navRoutesClasses: 'margin-right-10',
            navIconsClasses: 'sm:font-size-18'
        }
    }
}
</script>