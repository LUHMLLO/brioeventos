<template>
  <div class="navbar p-x-16 d-none sm:d-flex" :class="[theme.primary_background]">
    <div class="navbar-content">
      <div class="navbar-section">
        <div class="width-100 height-50 offset-l-20">
          <div class="image-wrapper h-100">
            <img src="../assets/BrioPng.png" alt="" />
          </div>
        </div>
      </div>
      <div class="navbar-section">
        <i class="uil uil-bars font-xl" @click="toggleSidebar" />
      </div>
    </div>
  </div>
</template>
