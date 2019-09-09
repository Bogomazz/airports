<template>
    <md-toolbar class="paginator">
        <span>Page size: </span>
        <md-field class="paginator__page-size-input">
            <md-select :value="itemsPerPage" @md-selected="$emit('pageSizeChange', $event)" name="pageSize">
                <md-option :value="selectValues.TWENTY">20</md-option>
                <md-option :value="selectValues.FIFTY">50</md-option>
                <md-option :value="selectValues.HUNDRED">100</md-option>
            </md-select>
        </md-field>

        <span>Page: {{page}} from {{totalNumberOfPages}} </span>
        <button @click="prevEmit">prev</button>
        <button @click="nextEmit">next</button>
    </md-toolbar>
</template>

<script>
    import {ITEMS_PER_PAGE} from "../constants"
    export default {
        name: "Pagination",
        props: {
            page: Number,
            itemsPerPage: Number,
            totalNumberOfPages: Number
        },
        data: ()=> ({
            selectValues: ITEMS_PER_PAGE,
        }),
        methods: {
          prevEmit() {
            this.$emit('pageChange', this.page-1)
          },
          nextEmit() {
            this.$emit('pageChange', this.page+1)
          }
        }
    }
</script>

<style scoped>
    .paginator {
        display: flex;
        justify-content: flex-end;
    }
    .paginator__page-size-input {
        width: 3rem;
    }
</style>