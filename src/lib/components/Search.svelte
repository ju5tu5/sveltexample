<script>
  // Afhandeling van het zoeken
  export let showsearch
</script>

<form>
  <fieldset>
    <legend class:showsearch>Zoek een <span>sick</span> board</legend>
    <label for="zoek">Zoeken</label>
    <input type="search" name="q" id="zoek" placeholder="Zoek op naam of merk" />
    <button type="submit">Zoek!</button>
  </fieldset>
  <button><span>zoek een board</span></button>
</form>

<style>
  /* ZOEK FORM Staat eerst buiten beeld, na klik schuift het naar beneden, Dit is de micro interactie */
  form {
    margin: -1rem;
    padding: 4rem 1rem 2rem 1rem;
    text-align: center;
    background: Goldenrod;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: roboto, helvetica, arial, sans-serif;
    font-weight: bold;
    font-size: 2em;
    color: #8a6914;
  }

  input[type='search'] {
    display: block;
    margin: 1rem 0;
    padding: 0.6rem;
    width: 16em;
    font-family: sans-serif;
    font-size: 1.4rem;
    text-align: left;
    border: solid 0.4rem DarkGoldenrod;
    transition: border 0.3s;
  }
  input[type='search']:focus {
    border: solid 0.4em black;
    border-radius: 1rem;
  }
  label {
    position: absolute;
    left: -666rem;
  }
  button {
    position: absolute;
    left: -666rem;
  }
  legend {
    position: relative;
  }
  legend > span {
    position: absolute;
    top: -8rem;
    left: 43%;
    transform: rotate(10deg);
    font-weight: normal;
    font-size: 0.8em;
    background: gold;
    color: black;
    padding: 0.2rem 0.8rem 0.8rem 0.8rem;
    /* maak je eigen clippy: http://bennettfeely.com/clippy */
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 57% 80%, 45% 100%, 31% 80%, 0 80%);

    /* Delay vanwege animatie op parent component */
    transition-delay: 0.3s;
    transition: top 0.35s 0.4s cubic-bezier(0.66, 1.66, 0.72, 1.03);
  }
  legend.showsearch > span {
    top: -2.6rem;
  }
</style>
