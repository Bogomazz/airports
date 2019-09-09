<template>
    <div class="custom-table">
        <md-table v-model="airports" md-card class="custom-table__table-view">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-numeric>{{item.id}}</md-table-cell>
                <md-table-cell md-label="Name">{{item.name}}</md-table-cell>
                <md-table-cell md-label="City">{{item.city}}</md-table-cell>
                <md-table-cell md-label="Country">{{item.country}}</md-table-cell>
                <md-table-cell md-label="IATA">{{item.iata}}</md-table-cell>
                <md-table-cell md-label="ICAO">{{item.icao}}</md-table-cell>
                <md-table-cell md-label="X" md-numeric>{{item.x | decimal}}</md-table-cell>
                <md-table-cell md-label="Y" md-numeric>{{item.y | decimal}}</md-table-cell>
                <md-table-cell md-label="Elevation">{{item.elevation}}</md-table-cell>
                <md-table-cell md-label="Timezone">{{item.timezone}}</md-table-cell>
                <md-table-cell md-label="DST">{{item.dst}}</md-table-cell>
                <md-table-cell md-label="TZID">{{item.tzid}}</md-table-cell>
            </md-table-row>
        </md-table>
        <div class="custom-table__pagination">
            <Pagination
                @pageChange="$emit('pageChange', $event)"
                @pageSizeChange="$emit('pageSizeChange', $event)"
                :page="paginationState.page"
                :items-per-page="paginationState.itemsPerPage"
                :total-number-of-pages="paginationState.totalNumberOfPages"
            />
        </div>
    </div>
</template>

<script>
    import Pagination from "./Pagination";
    export default {
        name: "CustomTable",
        components: {Pagination},
        props: {
            airports: {
                type: Array,
                default: () => []
            },
            paginationState: {
              page: Number,
              itemsPerPage: Number,
              totalNumberOfPages: Number
            }
        },
        filters: {
            decimal: (value) => {
                value = parseFloat(value);
                if (!value) {
                    return 0;
                }
                return value.toPrecision(3);
            }
        },
    }
</script>

<style scoped>

</style>