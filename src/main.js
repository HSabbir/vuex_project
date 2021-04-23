import { createApp } from 'vue'
import {createStore} from "vuex";
import App from './App.vue'
import axios from "axios";

const store = createStore({
    state() {
        return {
            counter : 0,
            history : [0]
        }
    },
    mutations: {
        addToCounter(state, payload) {
            state.counter = state.counter + payload
            this.state.history.push(state.counter)
        },
        substractToCounter(state, payload) {
            this.state.counter = this.state.counter - payload
            this.state.history.push(state.counter)
        }
    },
    actions: {
        async addRandom(context) {
            const data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            context.commit("addToCounter",data.data)
        }
    },
    getters : {
        activeIndexes: (state) => (payload) => {
            const indexes = [];
            state.history.forEach((number, index) => {
                if(number === payload){
                    indexes.push(index)
                }
                }
            )
            return indexes
        }
    }
    })

const app = createApp(App)

app.use(store)
app.mount('#app')
