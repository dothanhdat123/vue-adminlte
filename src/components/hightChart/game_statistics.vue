<template>
  <div class="overflow-auto">
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 10, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 11, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 12, first_name: 'Barney', last_name: 'Rubble' },
          { id: 13, first_name: 'Betty', last_name: 'Rubble' },
          { id: 14, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 15, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 16, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 17, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 18, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 19, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 10, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows () {
        return this.items.length
      }
    }
  }
</script>
