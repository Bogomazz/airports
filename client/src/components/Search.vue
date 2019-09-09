<template>
    <div class="search">
        <md-field class="search__input">
            <label>Name, country, iata...</label>
            <md-input v-model="query" class="search__input-input"></md-input>
        </md-field>
        <md-button @click="emitSearch" class="md-raised md-primary">Search</md-button>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data: () => ({
            query: ''
        }),
        methods: {
            emitSearch() {
                this.$emit('search', this.query);
            }
        }
    }
</script>

<style scoped>
    .search {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search__input {
        width: 40%;
    }
</style>