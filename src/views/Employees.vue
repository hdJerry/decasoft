<template>
  <div class="about">
    <div class="container">

      <br>

      <div v-if="success == 1" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{{ exclaim }}</strong> {{ message }}.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="clearAlert">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div v-if="success == 0" class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{{exclaim}}</strong> {{ message }}.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="clearAlert">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>



    <form action @submit.prevent="createNow">


       <div class="form col-md-6">

         <h2>Get Started</h2>
         <h4>Create and employee only takes a minute.</h4>

         <br>

         <div class="form-group">
           <label for="firstname">FIRST NAME</label>
           <input type="text" name="firstname" value="" v-model="firstname" class="form-control details" id="lastname">
         </div>
         <div class="form-group">
           <label for="lastname">LAST NAME</label>
           <input type="text" name="lastname" v-model="lastname" value="" class="form-control details" id="lastname">
         </div>

         <div class="form-group">
           <label for="email">EMAIL ADDRESS</label>
           <input type="text" name="email" value="" v-model="email" class="form-control details" id="emial">
         </div>

         <div class="form-group">
           <label>GENDER</label>
           <select  v-model="gender" class="form-control">
               <option value="" disabled>-- Select Gender --</option>
               <option  v-for="(value,i) in genders" :value="value" :key="i">{{value}}</option>
           </select>
         </div>
         <button class="btn btn-success btn-block" v-if="!isCreating">Create Employee</button>
         <button class="btn btn-success btn-block" type="button" disabled v-else>
          <span class="spinner-grow text-primary" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      </div>
    </form>

    </div>
  </div>
</template>




<script type="text/javascript">

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default{
  data () {
    return {
      datas : [],
      email:'',
      lastname : '',
      firstname : '',
      gender : '',
      success : 2,
      genders:['Male', 'Female'],
      isCreating: false,
      message : "",
      exclaim : "",
      search : ""
    }
  },
  methods:{

    async createNow(){
      this.isCreating = true;

      let employees = JSON.parse(localStorage.getItem('employees'));
      let finalArr = Array.from(employees);

      if(
        this.firstname.trim() !== "" &&
        this.lastname.trim() !== "" &&
        this.email.trim() !== "" &&
        this.gender !== ""
      ){

        if(re.test(this.email) == true){



          let verify = finalArr.find((elm)=>{
            return elm.email == this.email
          })

          if(verify !== undefined){
            this.message ="Employee with Email already exist";
            this.exclaim = "Oh Crap!!!"

            this.success = 0;
            this.isCreating = false;

          }else {

             await finalArr.push({
              firstname : this.firstname,
              lastname : this.lastname,
              email : this.email,
              gender : this.gender
            })

            localStorage.setItem('employees',JSON.stringify(finalArr));

            this.isCreating = false;

            this.message ="Employee Successfully added";
            this.exclaim = "Great Job!"

            this.success = 1;
            this.isCreating = false;

            this.firstname = ""
            this.lastname = ""
            this.email = ""
            this.gender = ""
          }


        }else {
          this.message ="That cant be a correct Email!!!";
          this.exclaim = "Come on!"

          this.success = 0;
          this.isCreating = false;
        }


      }else {

        this.message ="Please Ensure you fill all fields properly";
        this.exclaim = "Holy guacamole!"

        this.success = 0;
        this.isCreating = false;

      }


    },
    clearAlert(){
      this.success = 2;
    },

  }

}


// sessionStorage.setItem('user',JSON.stringify(data.data));

</script>


<style media="screen">

label{
  font-size: 0.8em;
}

  .form{
    margin : 20px auto;
  }
</style>
