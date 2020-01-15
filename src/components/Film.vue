<template>
    <b-card
            :title="film.Title"
            :img-src="film.Poster"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
            style="max-width: 540px;"
    >
    </b-card>
</template>

<script>
export default {
    name: "Film",
    props: {
        film: { type: Object, required: true }
    }
}
</script>

<style scoped>

</style>