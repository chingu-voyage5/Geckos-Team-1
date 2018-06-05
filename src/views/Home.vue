<template>
  <section id="home">
    <h1>AppTrackr</h1>
    <h3>An intuitive way to keep track of your job applications</h3>
  </section>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  #home {
    min-height: 50vh;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-bottom: 8px;
  }
  h3 {
    max-width: 75ch;
    margin: 0 auto;
    text-align: left;
    font-weight: 400;
  }
</style>
