<template>
  <div class="wrapper">
    <!-- Navigation -->
    <Navigation/>

    <!-- Content -->
    <nuxt/>

    <!-- Footer -->
    <footer class="footer">
      <div class="tags">
        <ul>
          <li>Watch Free Movies Trailers</li>
          <li>Movie Trailers</li>
          <li>English Subtitled Movies Trailers</li>
          <li>Latest Movies Trailers</li>
          <li>New Movies Trailers</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>
<style>
  .center {
    text-align: center;
    width: 100%;
  }
</style>