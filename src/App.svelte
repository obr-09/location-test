<script lang="ts">
  import IpLocation from './lib/IpLocation.svelte';
import NavigatorLocation from './lib/NavigatorLocation.svelte';
</script>

<main>
  <div class="section">
    <NavigatorLocation enableHighAccuracy={true} />
  </div>
  <hr class="divider" />
  <div class="section">
    <NavigatorLocation enableHighAccuracy={false} />
  </div>
  <hr class="divider" />
  <div class="section">
    <IpLocation />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    gap: 16px;
    height: 100%;
  }

  .section {
    flex: 1;
    height: 250px;
  }

  .divider {
    width: 1px;
    height: 100%;
  }

@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .section {
    width: 100%;
  }

  .divider {
    width: 100%;
    height: 1px;
  }
}
</style>
