import { writable } from 'svelte/store';

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

// Generates a fictitious Ethereum Address of mixed case.
// This does _not_ produce a true checksum address.
// See https://docs.ethers.io/v5/api/utils/address/#address
function randomAddress() {
    const charset = '0123456789ABCDEFabcdef'
    const MAX_STRING_LENGTH = 40;
    let result = '';
    while (result.length < MAX_STRING_LENGTH) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return `0x${result}`;
}

function createAddress() {
    const { subscribe, set } = writable(ZERO_ADDRESS);
    
    return {
        // It implements `subscribe`, so it's a store 😉
        subscribe,
        random: () => set(randomAddress()),
        reset: () => set(ZERO_ADDRESS)
    };
}

export const address = createAddress();
