export default {
    data(){
        return {
            isVisible: true,
            user: {
                name:'Tom',
                age: 50,
                address:{
                    street:"Street 10"
                }
            }
        }
    },
    methods: {
        sayHello(){
            alert('Hello world')
        }
    }
}