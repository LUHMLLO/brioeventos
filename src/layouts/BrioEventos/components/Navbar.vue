<template>
  <div class="navbar padding-0">
            

      <div class="navbar-content">
          
          
          <div class="navbar-section">
              <div class="image-wrapper vw-2 md:vw-4 xs:vw-7 margin-left-5">
                  <img src="../assets/logo-icon.png" alt="">
              </div>
          </div>
          
          <div class="navbar-section">
              
                <router-link :to="'/'+icon.name" :class="[ navRoutesClasses , icon.class ]" v-for="(icon,index) in navIcons" :key="index">
                    <i :class="['uil uil-'+icon.icon,navIconsClasses]"></i>
                </router-link>
                
                <i class="uil uil-bars font-size-20 padding-y-5 padding-x-10 bg-blue-darken-4 color-baby-powder margin-left-10" @pointerdown="toggleSidebar"></i>

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
            navRoutesClasses: 'padding-y-5 padding-x-10',
            navIconsClasses: 'sm:font-size-18'
        }
    }
}
</script>