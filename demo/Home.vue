<template>
    <div class="section">
        <h1>History</h1>
        <div class="desc">
            Click Add query to add <strong>name</strong> query string then click
            redirect
        </div>
        <button @click="addQuery">Add Query</button>
        <button @click="removeQuery">Remove Query</button>
        <button @click="redirect">Redirect</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        function addQuery() {
            if (!route.params["name"]) {
                router.push("?name=JohnDoe");
            }
        }
        function removeQuery() {
            router.replace({ name: "Home", query: undefined });
        }
        function redirect() {
            router.push({ name: "History" });
        }
        return { addQuery, removeQuery, redirect };
    }
});
</script>
