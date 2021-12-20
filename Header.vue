<template>

        <header class="bg-secondary-2 py-3">
                <div class="max-w-6xl flex justify-between px-4 mx-auto items-center text-white-ui">
            <div class="flex items-center gap-x-4">
                <font-awesome-icon class="text-white text-2xl mr-5 cursor-pointer" :icon="myIcon" />
               
                <p class="text-lg">Law's</p>
            </div>
            <div class="flex items-center gap-x-4">
                <p class="text-lg">Bienvenido Usuario</p>
            
                  <nuxt-link to="/" class="flex items-center gap-x-2">
                  <p>Salir</p>
                  </nuxt-link>
          
            </div>
                </div>
        </header>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faBalanceScale, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      myIcon: faBars,
      legalIcon: faBalanceScale,
      exitIcon: faDoorOpen
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>