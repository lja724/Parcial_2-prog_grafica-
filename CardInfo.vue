<template>
       <div class=" bg-blue-300 px-5 py-3 rounded"><p class=" text-blue-700 text-lg text-center">{{title}}</p>
                    <p class="text-center text-blue-700">{{detail}}</p></div>
</template>

<script>
export default {
    props: ["title", "detail"]
}
</script>