<template>
<aside class="asideBox max-w-max text-white  bg-secondary-2 p-4 text-lg flex flex-col items-center gap-y-6 rounded-lg h-full">
    <div class="cursor-pointer">
        <p>Home</p>
        <font-awesome-icon class="text-white" :icon="home" />
    </div>
   
    <div class="cursor-pointer">
        <p>Expedientes</p>
        <font-awesome-icon class="text-white" :icon="hammer" />
    </div>
    <LineSeparate />
    <div class="cursor-pointer">
        <p>Reportes</p>
        <font-awesome-icon class="text-white" :icon="file" />
    </div>
      <LineSeparate />
      <p class="text-center text-primary-2 text-base">Configuración</p>
    <div class="cursor-pointer">
        <p>Aseguradora</p>
        <font-awesome-icon class="text-white" :icon="shield" />
    </div>
     <div class="cursor-pointer">
        <p>Usuarios</p>
        <font-awesome-icon class="text-white" :icon="user" />
    </div>
    <div class="cursor-pointer">
        <p>Juzgado</p>
        <font-awesome-icon class="text-white" :icon="build" />
    </div>
</aside>
    
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faGavel, faFile, faShieldAlt, faUser, faUniversity } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      home: faHome,
      hammer: faGavel,
      file: faFile,
      shield: faShieldAlt,
      user: faUser,
      build: faUniversity

    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
.asideBox > div{
    display: flex;
    justify-content: left;
    align-items: center;
    column-gap: 12px;
}

</style>