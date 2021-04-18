<template>
    <div class="section">
        <h1>History</h1>
        <div class="desc">
            Click Back to return to home page.
        </div>
        <button @click="redirect">Back</button>
    </div>
</template>

<script lang="ts">
import { pushHistory } from "../src/vHistory";
import { defineComponent } from "vue";
export default defineComponent({
    setup() {
        function redirect() {
            pushHistory("Home", "/");
        }
        return { redirect };
    }
});
</script>
