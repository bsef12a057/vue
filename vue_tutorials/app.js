const app=Vue.createApp({
   // template: '<h1>I am template</h1>'
   data(){
       return{
        url: 'http://www.google.com',
           showbooks:true,
            books:[
                { 
                    Title:'english',
                    author:'christopher',
                    image:"/assets/eng.jpeg",
                    isFav:true
                },
                { 
                    Title:'islamiat',
                    author:'rumi',
                    image:"/assets/isl.jpeg",
                    isFav:false

                },
                { 
                    Title:'urdu',
                    author:'ashfaq ahmed',
                    image:"/assets/urdu.jpg",
                    isFav:true

                }
            ],
           x:0,
           y:0
       }
   },
   methods:{
       /* changeTitle(){
        this.Title="Something else"
       } */
       ToggleBooks(){
           this.showbooks=!this.showbooks;
       },
       handleevent(e){
        alert(e.type);
       },
       togglefav(book){
        book.isFav=!book.isFav;
        },
       handleMouseEvent(e){
            this.x = e.offsetX
            this.y = e.offsetY
       },
       
   },
   computed: {
    filteredbooks(){
        return this.books.filter((book)=>book.isFav)
    }
   }
})

app.mount("#app");