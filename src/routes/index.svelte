<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/env';
    import { address } from '../stores.js';

    onMount(() => {
        if (window.location.hash) {
            address.set(window.location.hash.slice(1))
        }
    })

    function abbreviate (a) {
        const RENDERABLE_CHARACTERS = 4
        const first = a.slice(0, RENDERABLE_CHARACTERS)
        const end = a.slice(a.length - RENDERABLE_CHARACTERS)
        return `${first}..${end}`
    }
</script>

<header class="w-100 pa3 ph5-ns">
    <h2>Zorb Generator</h2>
    <section class="fl w-100 pa2">
        <zora-zorb address={$address} size="50%"></zora-zorb>    
    </section>
</header>

<main class="w-100 pa3">
    <h4>Current Address: <a href="#{$address}">{abbreviate($address)}</a></h4>
    <section class="fl w-100">
        <button on:click={address.random}>Generate new Zorb</button>
        <button on:click={address.reset}>Reset</button>
    </section>
</main>
