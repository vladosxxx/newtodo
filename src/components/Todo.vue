<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="d-flex">
                    <v-text-field label="New Task" hide-details="auto" v-model=task v-on:keyup.enter="AddNewTodo"></v-text-field>
                    <v-menu
                            v-model="datePick"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    class="pickers"
                                    v-model="date"
                                    label="Pick date"
                                    prepend-icon="event"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @input="datePick = false"></v-date-picker>
                    </v-menu>
                    <v-menu
                            ref="menu"
                            v-model="timePicker"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="time"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    class="pickers"
                                    v-model="time"
                                    label="Pick time"
                                    prepend-icon="access_time"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                                v-if="timePicker"
                                v-model="time"
                                format="24hr"
                                full-width
                                @click:minute="$refs.menu.save(time)"
                        ></v-time-picker>
                    </v-menu>
                    <v-btn large v-on:click="AddNewTodo(task)">Add</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list dense>
                        <v-subheader>Todo Tasks</v-subheader>
                      <v-list-item-group color="primary" class="d-flex flex-column justify-space-between">
                        <draggable  v-model="sourceTodos"
                                    :options="{delay:200, animation:300}"
                        >
                        <v-list-item v-for="(todo, id) in sourceTodos" v-bind:key="id">
                                <v-btn icon color="green" v-on:click="DoneTodo(sourceTodos.indexOf(todo))">
                                    <v-icon>mdi-check-circle</v-icon>
                                </v-btn>
                                <v-card-text class="d-flex flex-row justify-space-between">
                                    <div class="task d-flex flex-row ">
                                    <v-list-item-action class="handle">
                                        <v-icon>mdi-card-text</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title><h3>{{ todo.textTodo }}</h3></v-list-item-title>
                                    </v-list-item-content>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div v-if="todo.date !== ''">
                                        <p class="dateList"><v-icon>mdi-calendar</v-icon>
                                        {{ todo.date }}</p>
                                    </div>
                                        <div v-if="todo.time !== ''">
                                        <p><v-icon>mdi-clock-time-eight</v-icon>
                                        {{ todo.time }}</p>
                                        </div>
                            </div>
                            </v-card-text>
                                <v-btn icon :to="{name: 'Edit', params: {id: sourceTodos.indexOf(todo)}}">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                    </v-list-item>
                        </draggable>
                      </v-list-item-group>
                    </v-list>
                </v-col></v-row>
        </v-container>
    </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
        name: 'Todo',
  components: {
    draggable,
  },
        data: () => ({
                task: '',
                date: '',
                time:'',
                checkbox1: false,
                timePicker: false,
                datePick: false
        }),
        methods:{
            AddNewTodo() {
                if(this.task === '' || this.task === null)
                    return
                this.$store.commit('addTodo', { task: this.task, date: this.date, time: this.time})
                this.task = this.date = this.time = ''
            },
            DoneTodo(i){
                this.$store.commit('doneTodo', i)
            }
        },
        computed: {
            sourceTodos: {
              get(){
                return this.$store.state.todos
              },
              set(value){
                this.$store.commit('saveTodo', value)
              }
            }
        }

    }
</script>
<style scoped>
    .pickers{
        max-width: 200px!important;
    }
    .dateList{
        margin-right: 5px;
    }
    p{
        font-size: 8pt;
    }


    .sortable-chosen {
      opacity: 0.7;
      background-color:#dcdcdc;
    }

    .handle {
      cursor: move;
    }
</style>