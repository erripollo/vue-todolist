const app = new Vue ({
    el: '#app',

    data: {
        logo: './assets/img/vue-js-logo.png',
        newTask: '',
        modTask: '',

        //default tasks
        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn Js'
        ],

        removeTasks: [],

        completeTasks: []

    },

    methods: {
        /**Add Task */
        addTask(){
            //push newTask in tasks array, no empty task
            if(this.newTask.length > 2){
                this.tasks.unshift(this.newTask)
            }else {
                alert('🚫 Il nome della task deve contenere almeno 3 caratteri')
            }

            //reset value input text
            this.newTask = ''
        },

        /**Remove task */
        removeTask(index){
            const removeEl = this.tasks.splice(index, 1);
            this.removeTasks = [...this.removeTasks,...removeEl]
            console.log(this.removeTasks);
        },

        /**Complete task */
        completeTask(index){
            const completeEl = this.tasks.splice(index, 1);
            this.completeTasks = [...this.completeTasks,...completeEl]
            console.log(this.completeTasks);
        },


    }
})