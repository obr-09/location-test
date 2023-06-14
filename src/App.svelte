<script lang="ts">
  import IpLocation from './lib/IpLocation.svelte';
import NavigatorLocation from './lib/NavigatorLocation.svelte';
</script>

<main>
  <div class="section">
    <NavigatorLocation enableHighAccuracy={true} />
  </div>
  <div class="section">
    <NavigatorLocation enableHighAccuracy={false} />
  </div>
  <div class="section">
    <IpLocation />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .section {
    flex-grow: 1;
    width: 33%;
  }
</style>
