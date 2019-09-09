<template>
    <div>
        <Search @search="handleSearch"></Search>
        <CustomTable
            :airports="airports"
            :pagination-state="paginationState"
            @pageChange="onPageChange"
            @pageSizeChange="onPageSizeChange"
        />
    </div>
</template>

<script>
    import Search from "./Search";
    import CustomTable from "./CustomTable";
    import {AirportsService} from "../services/AirportsService";
    import {ITEMS_PER_PAGE} from "../constants";

    export default {
        name: "AirportsPage",
        components: {
            Search,
            CustomTable
        },
        data: () => ({
            airports: [],
            searchQuery: '',
            paginationState: {
                page: 1,
                itemsPerPage: ITEMS_PER_PAGE.TWENTY,
                totalNumberOfPages: 0
            }
        }),
        created: function() {
            this.updateAirportsInfo()
        },
        methods: {
            async updateAirportsInfo() {
                const airportsInfo = await AirportsService.get(
                    this.searchQuery,
                    this.paginationState.page,
                    this.paginationState.itemsPerPage
                );
                this.airports = airportsInfo.data;
                this.paginationState.page = airportsInfo.page;
                this.paginationState.itemsPerPage = airportsInfo.itemsPerPage;
                this.paginationState.totalNumberOfPages = airportsInfo.totalNumberOfPages;
            },
            async handleSearch(query) {
                this.searchQuery = query;
                this.paginationState.page = 1;
                await this.updateAirportsInfo();
            },
            async onPageChange(page) {
                this.paginationState.page = page;
                await this.updateAirportsInfo();
            },
            async onPageSizeChange(pageSize) {
                this.paginationState.itemsPerPage = pageSize;
                this.paginationState.page = 1;
                await this.updateAirportsInfo();
            }

        }
    }
</script>

<style scoped>

</style>