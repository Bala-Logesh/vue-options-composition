<template>
    <div class="container mt-4 text-center" style="max-width: 600px;">
        <h1 class="mb-5">You have {{ todosCount }} Todos</h1>
        <div class="input-group mb-5">
            <input type="text" class="form-control p-3" placeholder="Add a Todo" v-model="data.newTodoName"
                @keydown.enter="addTodo">
            <button class="btn btn-primary" style="width: 125px;" @click="addTodo">Add</button>
        </div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center p-3" v-for="todo in data.todos"
                :key="todo.id">
                {{ todo.name }} <span class="badge bg-danger pointer" @click="deleteTodo(todo.id)"
                    role="button">x</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, watch, reactive } from 'vue'

export default {
    setup() {
        const data = reactive({
            newTodoName: '',
            todos: [
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
            ]
        })

        const excludedWords = ['fail', 'die', 'quit']

        let todosCount = computed(() => {
            return data.todos.length
        })

        function addTodo() {
            if (data.newTodoName == "") return

            data.todos.push({ id: Date.now(), name: data.newTodoName })
            data.newTodoName = ''
        }

        const deleteTodo = id => {
            data.todos = data.todos.filter(todo => todo.id !== id)
        }

        watch(data, (newValue) => {
            if (excludedWords.includes(newValue.newTodoName.toLowerCase())) {
                alert('Never use the word ' + newValue.newTodoName + "!!!!")
                data.newTodoName = ''
            }
        })

        return {
            data,
            excludedWords,
            todosCount,
            addTodo,
            deleteTodo
        }
    }
}
</script>

<style scoped></style>