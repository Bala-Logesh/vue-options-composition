<template>
    <div class="container mt-4 text-center" style="max-width: 600px;">
        <h1 class="mb-5">You have x Todos</h1>
        <div class="input-group mb-5">
            <input type="text" class="form-control p-3" placeholder="Add a Todo">
            <button class="btn btn-primary" style="width: 125px;">Add</button>
        </div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                One <span class="badge bg-danger">x</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                Two <span class="badge bg-danger">x</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                Three <span class="badge bg-danger">x</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>