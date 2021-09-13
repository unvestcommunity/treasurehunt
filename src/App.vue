<template>
  <div id="app">
        <header>
        <div id="logo"><img src="./assets/logo.png">
                <br/>
        <strong>UNVEST Treasure Hunt - Community Collaboration</strong>
    </div>
    </header>
    <section>
        Treasure Public Key:<br/>
        <input id="taPubKey" v-model="pubKey" name="taPubKey" placeholder="Targeted public key"><br/>
    </section>
    <section>
        Clues:<br/>
        <textarea id="taHints" v-model="hints" name="taHints" rows="5" placeholder="Each line represents part of the key (clue) extracted from the video - (order is important, should be in hex, repetition is fine, no spaces)"></textarea><br/>
        <!--<button v-on:click="hintsSample">Sample</button>-->
        <button v-on:click="find(true)">Find Key</button>
    </section>
    <section>
        Private Keys/Guesses:<br/>
        <textarea id="taGuesses" v-model="guesses" name="taGuesses" rows="5" placeholder="Each line represents a key in hex format (e.g. 8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f)"></textarea><br/>
        <!--<button v-on:click="keysSample">Sample</button>-->
        <button v-on:click="find(false)">Find Key</button>
    </section>
    <section>
        Result:<br/>
        <textarea id="taResult" v-model="result" name="taResult" rows="5" readonly></textarea>
    </section>
    <footer>
        <p>
          This tool was made to help Unvest community to find the treasure key.<br/><br/>
          Please do not hesitate to show some love here :)<br/><br/>
          0xEa89908348D2D9E3A6e7BE531d5FaB8F360d235B
          <br/><br/>
        </p>
        
    </footer>
  </div>
</template>

<script>
import './assets/style.css';
import helper from '@/helper'

export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      // pubKey: "0x63FaC9201494f0bd17B9892B9fae4d52fe3BD377",
      pubKey: "0xAB3a4e26A765D321f1Fc45c4E1A2B60391051097",
      hints: null,
      guesses: null,
      result: null
    }
  },
  methods: {
    find: function (fromHints) {
      this.result = "Finding the correct match...";
      try{
        var key = "";
        if(fromHints===true)
          key = helper.findFromHints(this.hints.split(/\r?\n/), this.pubKey);
        else
          key = helper.findFromKeys(this.guesses.split(/\r?\n/), this.pubKey);

        if(key)
          this.result = "Key found: " + key;
        else
          this.result = "No match found!";

        console.log(this.result);
      } catch(error){
        this.result = "An error occured!\nMake sure your entries are valid hex values, each in a separate line";
      }
      
    }
  }
}
</script>
