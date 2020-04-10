<template>
  <div>
    <h1>Biểu đồ user theo type</h1>
    <va-chart :chart-config='lineChartConfig'></va-chart>
  </div>
</template>

<script>
  import VAChart from '../VAChart'
  export default {
    components: {
      'va-chart': VAChart
    },
    data () {
      return {
        lineChartConfig: {
          type: 'line',
          data: {
            datasets: [{
              data: []
            }],
            labels: []
          }
        }
      }
    },
    methods: {
      getdata () {
        let number = [10, 60, 30, 40, 50, 30, 10, 60, 30, 40, 50, 30, 10, 60, 30, 40, 50, 30, 50, 30]
        let lable = ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7', 'day 8', 'day 9', 'day 10', 'day 11', 'day 12', 'day 13', 'day 14', 'day 15', 'day 16', 'day 17', 'day 18', 'day 19', 'day 20']
        this.lineChartConfig.data.datasets[0].data = number
        this.lineChartConfig.data.labels = lable
      }
    },
    created () {
      this.getdata()
    }
  }
</script>

<style scoped>

</style>
