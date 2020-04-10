<template>
  <div>
    <h2>Biểu đồ user theo type</h2>
    <va-chart
      :chart-config='chartConfig'></va-chart>
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
        chartConfig: {
          type: 'pie',
          data: {
            labels: ['mcashchain', 'metamask', 'tron', 'facebook', 'google', 'twitter'],
            datasets: [{
              data: [10, 20, 20, 20, 10, 20],
              backgroundColor: ['#00a65a', '#f39c12', '#00c0ef', '#64FE2E', '#00FFFF', '#BF00FF'],
              hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef', '#64FE2E', '#00FFFF', '#BF00FF']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
