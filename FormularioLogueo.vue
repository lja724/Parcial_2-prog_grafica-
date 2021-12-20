<template>
   <FormulateForm 
   name="crearCuenta"
   @input="crearCuenta"
   @submit="submit">
        <div class="flex flex-col text-white">
           
       <FormulateInput

      name="userEmail"
      type="email"
      label="Usuario"
      input-class="labelColor border-2 focus:text-primary-1 rounded border-secondary-3 focus:border-secondary-2 transition duration-300 h-9 outline-none px-2 w-full"
         />

        </div>
        <div class="flex flex-col mt-3 text-white">
             <FormulateInput
             name="userPassword"
      type="password"
      label="Contraseña"
      input-class="labelColor border-2 focus:text-primary-1 rounded border-secondary-3 focus:border-secondary-2 transition duration-300 h-9 outline-none px-2 w-full"
    />
        </div>

       <div class="mt-8">
            <button  type="submit" class=" bg-secondary-2 px-3 py-2 w-full rounded hover:bg-blue-900 text-white-ui  transition duration-300">Ingresar a Cuenta</button>
        <button class="mt-3 text-white text-center w-full">¿Olvidaste tu Contraseña?</button>
       </div>
   </FormulateForm>
</template>

<script>
 




export default {
    methods:{
        submit(data){
          const users = [{
              email: "programaciongrafica@uip.com",
              password: "1234"
            },
            {
              email: "test@uip.com",
              password: "test1234"
            }]
            
          

          users.forEach( (user) => {
            if( user.email === data.userEmail && user.password === data.userPassword){
              this.$router.push({path: '/HomePage'});
            }
          })
        
        }
    }
    
}
</script>

<style>
.labelColor label{
  color: white !important;

}
.labelColor input{
  color: black !important;

}
</style>