<template>
  <div class="cinema_room">
    <Seat v-for="(seat, index) in seats" :key="index" :seat-code="seat"/>
  </div>
</template>

<script>
import Seat from './Seat'
export default {
    name: 'CinemaRoom',
    components: {
        Seat
    },
    data(){
        return {
            seats: ["a","b","c","d", "e", "f", "g" , "h","a","b","c","d", "e", "f", "g" , "h","a","b","c","d", "e", "f", "g" , "h","a"]
        }
    }
}
</script>

<style scoped>
    .cinema_room{
        width: 736px;
        height: 736px;
        border: 2px solid gray;
        border-radius: 5px;
        background-color: #4f4f4f;
        padding: 16px;
    }
</style>