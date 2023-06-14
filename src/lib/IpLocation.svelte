<script lang="ts">
  import CoordinatesLink from "./CoordinatesLink.svelte";

  let result: string | null = null;
  let error: string | null = null;
  let loading = false;
  let position: { latitude: number; longitude: number } | null = null;

  const getLocation = () => {
    result = null;
    error = null;
    position = null;
    loading = true;
    fetch('https://ipinfo.io/loc', { method: 'GET', })
      .then((response) => {
        handleApiResponse(response);
      })
      .catch((error) => {
          error = 'IP location failed: ' + error.message;
          console.error(error);
      })
      .finally(() => {
        loading = false;
      });
  };

  const handleApiResponse = async (response: Response) => {
    if (response.ok) {
      result = 'IP location successfuly retrieved';
      console.log(result, response);
      const responseText = await response.text();
      const [latitude, longitude] = responseText.split(',');
      position = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };
    } else {
      error = 'Fetch IP location failed';
      console.error(error, response);
    }
  };
</script>

<div class="ip-location">
  <ul class="warning">
    <li>API <a href="https://ipinfo.io/loc" target="_blank" rel="noopener noreferrer">https://ipinfo.io/loc</a> is rate limited</li>
    <li>Ad blockers may prevent this call</li>
  </ul>

  <button on:click={getLocation} disabled={loading} class="ip-button">
    Get IP location
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
.ip-location {
  display: flex;
  flex-direction: column;
}

.ip-button {
  margin: 0 auto 8px auto;
  width: 250px;
}

.warning {
  height: 50px;
  list-style: none;
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
