<template>
  <div id="sidebar" class="sidebar">
      <div class="sidebar-content">

          <div class="sidebar-section padding-0 h-10">
              <div id="bluebox" class="bg-blue w-100 h-100 text-align-center d-flex flex-center">
                  <i class="uil uil-bars font-size-25 color-baby-powder"></i>
              </div>
          </div>

          <div class="sidebar-section">
              <router-link to="">
                  <span>Home</span>
              </router-link>
              <router-link to="">
                  <span>Agenda</span>
              </router-link>
              <router-link to="">
                  <span>Expositores</span>
              </router-link>
              <router-link to="">
                  <span>Descargables</span>
              </router-link>
              <router-link to="">
                  <span>Encuesta</span>
              </router-link>
              <router-link to="">
                  <span>Soporte</span>
              </router-link>
              <router-link to="">
                  <span>Juegos</span>
              </router-link>
          </div>
          <div class="sidebar-section">
              <router-link to="">
                  <span>Settings</span>
              </router-link>
              <router-link to="">
                  <span>Logout</span>
              </router-link>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>