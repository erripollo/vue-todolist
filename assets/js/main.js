const app = new Vue ({
    el: '#app',

    data: {

        newTask: '',

        //default tasks
        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn Js'
        ]

    },

    methods: {
        /**Add Task */
        addTask(){
            //push newTask in tasks array
            this.tasks.push(this.newTask)

            //reset value input text
            this.newTask = ''
        }

    }
})