<template>
  <div>
    <h3>ToTal Volume: 3000 <small>Volume</small></h3>
    <h3>Biểu đồ volume theo type</h3>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-2'>
          </div>
          <div class='col-md-8'> 
             <va-chart
               :chart-config='chartConfig'>
             </va-chart> 
          </div>
          <div class='col-md-2'>    
          </div>
        </div>
      </div>
    </div>
     <h3>Total Daily new Volume</h3>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-12'>
              <p class='text-center'>
               <strong>Total Daily Mcashchain</strong>
              </p>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
              <div class="pull-right">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-12'>
              <p class='text-center'>
                 <strong>Total Daily Metamask</strong>
              </p>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
              <div class="pull-right">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-12'>
            <p class='text-center'>
            <strong>Total Daily Tron</strong>
            </p>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
              <div class="pull-right">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
               <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-12'>
            <p class='text-center'>
            <strong>Total Daily Facebook</strong>
            </p>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
              <div class="pull-right">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-12'>
            <p class='text-center'>
              <strong>Total Daily Google</strong>
            </p>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
              <div class="pull-right">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-12'>
            <p class='text-center'>
              <strong>Total Daily Twitter</strong>
            </p>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
              <div class="pull-right">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <h3>Biểu đồ new volume 20 ngày gần nhất</h3>
    <div class='box'>
      <div class='box-body'>
        <div class='row'>
          <div class='col-md-2'>
          </div>
          <div class='col-md-8'> 
              <!-- <p class='text-center'>
               <strong>Total Daily Mcashchain</strong>
              </p> -->
              <va-chart :chart-config='barChartConfig'></va-chart>
          </div>
          <div class='col-md-2'>    
          </div>
        </div>
      </div>
    </div>
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
        perPage: 5,
        currentPage: 1,
        items: [
          { id: 1, game_name: 'Fred', total_volume: 26, daily_volume: 12 },
          { id: 2, game_name: 'Wilma', total_volume: 68, daily_volume: 62 },
          { id: 3, game_name: 'Barney', total_volume: 22, daily_volume: 66 },
          { id: 4, game_name: 'Betty', total_volume: 16, daily_volume: 22 },
          { id: 5, game_name: 'Pebbles', total_volume: 19, daily_volume: 18 },
          { id: 6, game_name: 'Bamm Bamm', total_volume: 17, daily_volume: 69 },
          { id: 7, game_name: 'The Great', total_volume: 30, daily_volume: 46 },
          { id: 8, game_name: 'Rockhead', total_volume: 88, daily_volume: 38 },
          { id: 9, game_name: 'Pearl', total_volume: 11, daily_volume: 86 }
        ],
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
        },
        barChartConfig: {
          type: 'bar',
          data: {
            labels: ['10/4/2020', '9/4/2020', '8/4/2020', '7/4/2020', '6/4/2020', '5/4/2020', '4/4/2020', '3/4/2020', '2/4/2020', '1/4/2020', '31/3/2020', '30/4/2020', '29/4/2020', '28/4/2020', '27/4/2020', '26/3/2020', '25/4/2020', '24/4/2020', '23/4/2020', '22/4/2020'],
            datasets: [
              {
                label: 'New User Daily',
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40, 90, 20, 15, 36, 52, 11, 25, 46, 18, 29, 64, 37, 28]
              }
            ]
          },
          options: {
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        },
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
    },
    computed: {
      rows () {
        return this.items.length
      }
    }
  }
</script>

<style scoped>

</style>
