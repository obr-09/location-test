<script lang="ts">
  import CoordinatesLink from "./CoordinatesLink.svelte";

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
        }, (geolocationError) => {
          error = 'Navigator geolocation failed: ' + geolocationError.message;
          console.error(error);
          loading = false;
        },
        { enableHighAccuracy, maximumAge: 0 }
      );
    } else {
      error = 'Geolocation is not supported by this browser.';
      console.error(error);
      loading = false;
    }
  };
</script>

<div class="navigator-location">
  <p class="warning">
  </p>

  <button on:click={getLocation} disabled={loading} class="navigator-button">
    Get navigator geolocation <br /> ({enableHighAccuracy ? 'with high accuracy' : 'without high accuracy'})
  </button>

  {#if result}
    <div class="result">
      <span>{result}</span>
      {#if position}
        <CoordinatesLink latitude={position.latitude} longitude={position.longitude} />
      {/if}
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

.navigator-button {
  margin: 0 auto 8px auto;
  width: 100%;
}

.warning {
  height: 50px;
  color: orange;
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
