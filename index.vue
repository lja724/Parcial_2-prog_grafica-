<template>
  <div class="min-h-screen login relative font-lato flex items-center">
    <Login />
  </div>
</template>

<script>


export default {}
</script>

<style>
.login{
  background-image: url("../static/floriane-vita-FyD3OWBuXnY-unsplash.jpg");
  background-size: cover;
  background-position: center;
}

.login::before{
content: "";
min-height: 100vh;
width: 100%;
background-color: rgba(0, 0, 0, 0.5);
position: absolute;
}
</style>