<template>
  <div class="cinema_room">
    <Seat v-for="(seat, index) in seats" :key="index" :seat-code="seat.code" :taked="seat.taked"/>
  </div>
</template>

<script>
import Seat from './Seat'
import { mapState } from "vuex";
export default {
    name: 'CinemaRoom',
    components: {
        Seat
    },
    computed:{
        /*seats(){
            return this.$store.state.seats
        },*/
        ...mapState(['seats'])
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