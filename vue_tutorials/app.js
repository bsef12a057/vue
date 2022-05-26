const app=Vue.createApp({
   // template: '<h1>I am template</h1>'
   data(){
       return{
           showbooks:true,
           Title:'Hello',
           Msg:'Moto',
           age:'4'
       }
   },
   methods:{
       /* changeTitle(){
        this.Title="Something else"
       } */
       ToggleBooks(){
           this.showbooks=!this.showbooks;
       }
   }
})

app.mount("#app");