<script lang="ts">
  export let latitude: number;
  export let longitude: number;
</script>

<a href="https://www.google.com/maps/@{latitude},{longitude}" target="_blank">
  {latitude}, {longitude}
</a>
