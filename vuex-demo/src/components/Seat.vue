<template>
  <div class="seat" :class="{seat_taked: taked}" @click="take" >{{ seatCode }}</div>
</template>

<script>
export default {
    mame:"Seat",
    props:{
        seatCode:{
            type: String,
            required:true
        },
        taked: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        take(){
            this.$store.dispatch('take', this.seatCode)
        }
    }
}
</script>

<style scoped>
    .seat{
        display: inline-block;
        width: 132px;
        height: 132px;
        border: 2px solid gray;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 6px;
        cursor: pointer;
        transition: 0.3s all;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .seat:hover{
        background-color: lightblue;
    }

    .seat_taked{
        background-color: lightblue;
    }
</style>