<template>
    <div class="container mt-4 text-center" style="max-width: 600px;">
        <h1 class="mb-5">You have {{ todosCount }} Todos</h1>
        <div class="input-group mb-5">
            <input type="text" class="form-control p-3" placeholder="Add a Todo" v-model="newTodoName"
                @keydown.enter="addTodo">
            <button class="btn btn-primary" style="width: 125px;" @click="addTodo">Add</button>
        </div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center p-3" v-for="todo in todos"
                :key="todo.id">
                {{ todo.name }} <span class="badge bg-danger pointer" @click="deleteTodo(todo.id)"
                    role="button">x</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
    setup() {
        let newTodoName = ref('')
        let todos = ref([
            {
                id: 1,
                name: 'One'
            },
            {
                id: 2,
                name: 'Two'
            },
            {
                id: 3,
                name: 'Three'
            },
        ])

        const excludedWords = ['fail', 'die', 'quit']

        let todosCount = computed(() => {
            return todos.value.length
        })

        function addTodo() {
            if (newTodoName.value == "") return

            todos.value.push({ id: Date.now(), name: newTodoName.value })
            newTodoName.value = ''
        }

        const deleteTodo = id => {
            todos.value = todos.value.filter(todo => todo.id !== id)
        }

        watch(newTodoName, (newValue) => {
            if (excludedWords.includes(newValue.toLowerCase())) {
                newTodoName.value = ''
                alert('Never use the word ' + newValue + "!!!!")
            }
        })

        return {
            newTodoName,
            todos,
            excludedWords,
            todosCount,
            addTodo,
            deleteTodo
        }
    }
}
</script>

<style scoped></style>