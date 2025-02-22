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
export default {
    data() {
        return {
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
            ],
            excludedWords: ['fail', 'die', 'quit']
        }
    },
    computed: {
        todosCount() {
            return this.todos.length
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoName == "") return

            this.todos.push({ id: Date.now(), name: this.newTodoName })
            this.newTodoName = ''
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
    },
    watch: {
        newTodoName(newValue) {
            if (this.excludedWords.includes(newValue.toLowerCase())) {
                this.newTodoName = ''
                alert('Never use the word ' + newValue + "!!!!")
            }
        }
    }
}
</script>

<style scoped></style>