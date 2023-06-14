<script lang="ts">
  export let enableHighAccuracy = false;
  let result: string | null = null;
  let error: string | null = null;
  let loading = false;
  let position: { latitude: number; longitude: number } | null = null;

  const getLocation = () => {
    result = null;
    error = null;
    position = null;
    loading = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        position = {
          latitude: geolocation.coords.latitude,
          longitude: geolocation.coords.longitude,
        };
        result = 'Navigator geolocation successfuly retrieved, with enableHighAccuracy=' + enableHighAccuracy;
        console.log(result, geolocation);
        loading = false;
      });
    } else {
      error = 'Geolocation is not supported by this browser.';
      console.error(error);
      loading = false;
    }
  };
</script>

<div class="navigator-location">
  <button on:click={getLocation} disabled={loading}>
    Get navigator geolocation ({enableHighAccuracy ? 'with high accuracy' : 'without high accuracy'})
  </button>

  {#if result}
    <div class="result">
      <span>{result}</span>
      <strong>{position.latitude}, {position.longitude}</strong>
    </div>
  {/if}

  {#if error}
    <div class="error">
      {error}
    </div>
  {/if}
</div>

<style>
.navigator-location {
  display: flex;
  flex-direction: column;
}

.result {
  display: flex;
  flex-direction: column;
  color: darkgreen;
}

.error {
  color: darkred;
}
</style>
