<template>
  <div id="navbar" class="navbar padding-x-25">
            

      <div class="navbar-content">
          
          
          <div class="navbar-section">
              <i class="uil uil-bars margin-right-25 font-size-20 d-none" :class="!this.sidebarState ? 'sm:d-block':'sm:d-none' " @pointerdown="toggleSidebar"></i>
              <div class="input-wrapper sm:d-none">
                  <i class="uil uil-search color-grey-lighten-1"></i>
                  <input type="text" placeholder="search">
              </div>
          </div>
          
          <div class="navbar-section">
              
                <router-link :to="'/'+icon.name" :class="[ navRoutesClasses , icon.class ]" v-for="(icon,index) in navIcons" :key="index">
                    <i :class="['uil uil-'+icon.icon,navIconsClasses]"></i>
                </router-link>

                <div class="avatar avatar-lg">
                    <div class="image-wrapper round-12">
                        <img src="@/assets/avatar.png">
                    </div>
                </div>

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
                    class: 'd-none sm:d-block'
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