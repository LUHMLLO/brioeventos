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
              
                <router-link to="" class="margin-right-10 d-none sm:d-block">
                    <i class="uil uil-search"></i>
                </router-link>
                <router-link to="" class="margin-right-10">
                    <i class="uil uil-bell"></i>
                </router-link>
                <router-link to="" class="margin-right-10">
                    <i class="uil uil-comments-alt"></i>
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
}
</script>