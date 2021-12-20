<template>
    <div class="min-h-screen bg-white text-black box pb-6 gap-y-6">
        <Header class="col-start-1 col-end-12 " />
        <div class="max-w-6xl mx-auto px-4 col-start-1 col-end-12 w-full flex justify-between gap-x-6 relative">
            <Menu />
            <div class="flex flex-col justify-between mr-auto">
                <div>
                    <h1 class="text-5xl">Agenda del Día</h1>
                    <h2 class="text-xl text-gray-500">{{today}}</h2>
                </div>
                <div class="grid grid-cols-3">
                    <div class=" col-start-1 col-end-2 ">
                     <h2 class="font-bold mb-2 border-b-2 border-black-ui">Aseguradora</h2>
                     <p>ASSA</p>
                     <p>ANCON</p>
                     <p>CONANCE</p>
                     <p>PARTICULAR</p>
                     <p>INTEROCEANICA</p>
                    </div>
                    <div  class=" col-start-2 col-end-3 "><h2 class="font-bold mb-2 border-b-2 border-black-ui">Asegurado</h2>
                    
                    <p>Anthony Trejos</p>
                    <p>Luis Molina</p>
                    <p>Katherine Kent</p>
                    <p>Martin Alvarado</p>
                    <p>Joel Arauz Rodriguez</p>
                    </div>
                    <div  class=" col-start-3 col-end-4"> <h2 class="font-bold mb-2 border-b-2 border-black-ui">Juzgado</h2>
                    <p>Juzgado 5To(Pedregal)</p>
                    <p>Juzgado 5To(Pedregal)</p>
                    <p>Juzgado 5To(Pedregal)</p>
                    <p>Juzgado 5To(Pedregal)</p>
                    <p>Juzgado 5To(Pedregal)</p>
                    </div>
                    
                </div>
                <div class="flex gap-x-4 mbCustom">
                   <CardInfo title="Pendientes" detail="120" />
                   <CardInfo title="En Curso" detail="72" />
                   <CardInfo title="Cerrados" detail="204" />
                  
                </div>
            </div>
            <div>
              <no-ssr>
                  <date-picker class="text-primary-1" :inline="true" />
              </no-ssr>


            </div>
            <button class="absolute right-0 bottomCustom bg-secondary-2 rounded-full w-12 h-12 font-light text-xl  "><p class="flex justify-center items-center w-full h-full">+</p></button>
        </div>
    </div>
</template>


<style>
.box{
    display: grid;
    grid-template-columns: repeat(11, minmax(0, 1fr));
    grid-template-rows: max-content 1fr;
}

.mbCustom{
    margin-bottom: 20%;
}
.bottomCustom{
    bottom: 10%;
}
</style>

<script>
import moment from "moment"
const date = moment().locale("es").format("dddd DD MMMM [de] YYYY");



export default {
    data() {
        return {

            today: date
        }
        
    },
}
</script>