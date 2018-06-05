<template>
  <section id="dashboard">
    <h1>Dashboard</h1>
    <section id='boards'>
      <article class="saved">
        <h2>Saved</h2>
      </article>
      <article>
        <h2>Applied</h2>
      </article>
      <article>
        <h2>Interview</h2>
      </article>
      <article>
        <h2>Rejected</h2>
      </article>
    </section>
    <button role='button' id='add'>+</button>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#dashboard {
  position: fixed;
  left: 0;
  width: 100%;
  margin: 55px auto;
  height: 100%;
  background-color: #fff;
  box-shadow: 4px 4px 16px rgba(12,12,13,0.1);
  z-index: 1;
}
#boards {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px;
}

article {
  text-align: center;
  border: 2px solid rgba(#000, 0.1);
  width: 24%;
}

h2 {
  font-size: 1.5rem;
  font-weight: 400;
  font-variant-caps: all-small-caps;
  margin: 0;
  letter-spacing: 1.5px;
}

h1 {
  font-size: 3rem;
  text-transform: uppercase;
  color: powderblue;
}


#add {
  position: absolute;
  bottom: 50px;
  right: 50px;
  outline: none;
  border: none;
  padding: 18px;
  font-size: 2rem;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(43, 112, 190);
  box-shadow: 2px 2px 4px rgba(12,12,13,0.1);
  cursor: pointer;
  z-index: 5;
}
</style>
