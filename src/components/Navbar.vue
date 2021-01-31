<template>
  <div id="navbar" class="navbar sm:padding-left-0">
            
            <div class="bg-blue h-100 padding-x-10 text-align-center d-none sm:d-flex flex-center margin-right-15">
                <i class="uil uil-bars font-size-25 color-baby-powder"></i>
            </div>

      <div class="navbar-content">
          
          
          <div class="navbar-section">
              <div class="input-wrapper">
                  <i class="uil uil-search color-grey-lighten-1"></i>
                  <input type="text" placeholder="search">
              </div>
          </div>
          
          <div class="navbar-section">
              
                <router-link to="" class="margin-right-10">
                    <i class="uil uil-bell"></i>
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