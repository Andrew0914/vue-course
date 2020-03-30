<template>
  <div class="counters">
      <ul>
          <li>
              Taked: <b>{{ takedSeats }}</b>
          </li>
          <li>
              Available: <b>{{ availableSeats }}</b>
          </li>
      </ul>
  </div>
</template>

<script>
export default {    
    name: 'Counters',
    data(){
        return {
            takedSeats: 0 ,
            availableSeats: 0
        }
    }
}
</script>

<style scoped>
    .counters{
        width: 250px;
        height: 125px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #4f4f4f;
        font-size: 24px;
        background-color: #4f4f4f;
    }

    .counters ul > li {
        margin-bottom: 24px;
        color: white;
    }
</style>