const EthCrypto = require('eth-crypto');

var helper = {
    getPubKey(prvKey) {
        console.log(prvKey);
        return EthCrypto.publicKey.toAddress(EthCrypto.publicKeyByPrivateKey(prvKey));
    },

    * range(start, end) {
        for (; start <= end; ++start) { yield start; }
    },

    last(arr) { return arr[arr.length - 1]; },
    
    * numericCombinations(n, r, loc = []) {
        const idx = loc.length;
        if (idx === r) {
            yield loc;
            return;
        }
        for (let next of this.range(idx ? this.last(loc) + 1 : 0, n - r + idx)) { yield* this.numericCombinations(n, r, loc.concat(next)); }
    },

    * combinations(arr, r) {
        for (let idxs of this.numericCombinations(arr.length, r)) { yield idxs.map(i => arr[i]); }
    },

    findFromHints(hints, publicKey) {
        const PRVLENGTH = 64;

        let sorted = [...hints].sort((a, b) => b.length - a.length);

        let minComb = Math.floor(PRVLENGTH/sorted[0].length);
        minComb = minComb < 1 ? 1 : minComb > hints.length ? hints.length : minComb;

        let maxCom = Math.ceil(PRVLENGTH/sorted[hints.length-1].length);
        maxCom = maxCom < minComb ? minComb : maxCom > hints.length ? hints.length : maxCom;

        console.log('Shortest hint: ' + sorted[hints.length-1] + ", Longest hint: " + sorted[0]);
        console.log('Min combinations: ' + minComb + ", Max combinations: " + maxCom);

        var found = false;
        for(var comb = minComb ; comb <= maxCom && !found; comb++){
            for (let guessElements of this.combinations(hints, comb)) {
                let guess = guessElements.join('');
                
                if(this.isMatch(guess, publicKey)){
                    found = true;
                    return guess;
                }
            }
        }
    },

    findFromKeys(guesses, publicKey) {
        for (let guess of guesses) {
            if(this.isMatch(guess, publicKey)){
                return guess;
            }
        }
    },

    isMatch(guess, publicKey) {
        const PRVLENGTH = 64;
        
        if(!guess)
            return false;

        guess = guess.trim();

        if(guess.length != PRVLENGTH)
            return false;

        let add = this.getPubKey(guess);
        if(add == publicKey){
            console.log('Private key found:', guess);
            return true;
        }
        return false;
    }
}

export default helper