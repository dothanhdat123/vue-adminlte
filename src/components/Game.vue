<template>
  <div class="deposit">
    <h1>Game</h1>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">age</th>
      </tr>
      </thead>
      <tbody v-for="(item,index) in items">
      <tr>
        <th scope="row">{{index}}</th>
        <td>{{item.first_name}}</td>
        <td>{{item.last_name}}</td>
        <td>{{item.age}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style scoped>
  .deposit h1{
    color: red;
    text-align: center;
  }
</style>
