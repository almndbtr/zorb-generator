<script>
    import { address } from '../stores.js';
</script>

<h2>Zorb Generator</h2>
<h4>Current Address: {$address}</h4>
<button on:click={address.random}>Random Zorb</button>
<zora-zorb address={$address} size="20%"></zora-zorb>

