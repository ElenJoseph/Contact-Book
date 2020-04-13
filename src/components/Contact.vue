<template>
  <div class="contact" id="app">
 <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />

  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />  

  <main class="py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="header">Contacts</h5>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3 name" data-id="" v-for="contact in contacts" :key="contact.id">
                    <p class="col-md-8 align-item-baseline" >
                      {{contact.first}}
                      {{contact.last}}
                    </p>
                      <button @click="removeContact(contact)" class="btn btn-danger ">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                </div>
                 
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h4 class="header">Add New Contact</h4>
              </div>
              <div class="card-body">
                  <div class="row">
                    <div class="col addContainer">
                      <input type="text" v-model = "first" class="form-control" placeholder="First Name"/>
                      <input type="text" v-model = "last" class="form-control" placeholder="Last Name"/>
                    </div>  
                  </div>
                  <div class="row mt-3">
                    <div class="addBtn">
                      <button @click="addContact(contact)" type="submit" class="btn btn-primary">Add Contact</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        
</div>

</template>

<script>
import db from '../db.js'

export default {
  name: 'Contacts',

  data: function(){
    return{
      contacts:null,
      first: 'Maria',
      last: 'Smith'
    }

  },
  mounted: function() {
    var arr = []
    db.collection('contact4').orderBy("first")
    .get().then((snapshot) =>{
      console.log(snapshot.docs.forEach(doc=> {
        let obj = {
          id: doc.id,
          first: doc.data().first,
          last: doc.data().last
        }
       
        arr.push(obj)
        }))
      this.contacts=arr
    })
  },
  methods:{

    reload: function(){
      var arr = []
    db.collection('contact4').orderBy("first")
    .get().then((snapshot) =>{
      console.log(snapshot.docs.forEach(doc=> {
        let obj = {
          id: doc.id,
          first: doc.data().first,
          last: doc.data().last
        }
      
        arr.push(obj)
        }))
      this.contacts=arr
    })
    },

    removeContact: function(contact){
        db.collection('contact4').doc(contact.id).delete();
        this.reload()
    },


    addContact: function() {
         db.collection('contact4').add({
            first: this.first, 
            last: this.last
         })
    
         this.first='',
         this.last='';

         this.reload()
      },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  text-align: left;
}
.addContainer{
  margin-top: 2em;
  display: block;
}
.addContainer input{
  padding: 1em;
  margin: 1em;
  width: 50%;
}
.addBtn{
 margin-left: 2em;
}


</style>