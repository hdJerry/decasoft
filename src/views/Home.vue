
<template>
  <div class="dashboard">


    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-8 col-sm-8">
          <div class="card text-center text-white bg-success mb-3">

            <div class="card-body">
              <h4 class="empTitle">Total Employees</h4>
              <p class="empAmount">{{ abbreviateNumber(datas.length) }}</p>

            </div>


          </div>


        </div>

        <!-- <div class="col-md-4">
          <div class="card">

            <h2>Sidenav Push Example</h2>
            <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>

          </div>
        </div> -->
      </div>


      <br>
      <h4>Decasoft Employees List</h4>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">GENDER</th>
            <th scope="col">TOOL</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(emp,i) in paginationData" :key="i">
            <td>{{emp.firstname}}</td>
            <td>{{emp.lastname}}</td>
            <td>{{emp.email}}</td>
            <td>{{emp.gender}}</td>
            <td><i class="fa fa-trash trash" @click="deleteMe(i)"></i></td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row-reverse"  v-if="paginationData.length != datas.length">
        <button type="button" class="btn btn-secondary" @click.prevent="prevPage(paginationData.length)" :disabled="currentPage === 0">prev</button>
        <button type="button" class="btn btn-secondary"  @click.prevent="nextPage(paginationData.length)" :disabled="currentPage >= pageCount -1">next</button>
      </div>


    </div>

    <div class="floatBtn">

      <a href="/employees">+</a>

    </div>

  </div>
</template>

<script>

import mixinstunts from '../mixins/core'

export default {
  data () {
    return {
      datas : []
    }
  },
  created(){

  },
    beforeMount(){

      let employees = JSON.parse(localStorage.getItem('employees'));


      if(employees == null || employees == undefined){

        this.datas = [];
        localStorage.setItem('employees',JSON.stringify([]));
      }else{

        this.datas = employees;
        // console.log("Got  here now oooo");
        // this.$router.push('/');
      }
    },
  mounted() {
  },
  methods: {
    deleteMe(index){

      this.datas.splice(index,1);
      localStorage.setItem('employees',JSON.stringify(this.datas));

    }
  },
  mixins:[mixinstunts]
}
</script>

<style>
/* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'); */

.empTitle{
  margin-top: 20px;
  font-size: 1.2rem;
}

.empAmount{
  font-size: 1.6rem;
  font-weight: bold;
}


.trash{
  font-size: 25px;
  color: red;
  cursor : pointer;
}

.floatBtn{
  position: absolute;
  right: 20px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #28a745;
  font-size: 2.0em;
  text-align:center;
  transition: all .5s ease-in-out;
}

.floatBtn a:link{

  text-decoration: none;
}

.floatBtn:hover{
  transform: translateY(5px);
  /* color: #fff!important; */
}
.floatBtn a{
  display: block;
 transform: translateY(0px);
 color: #fff;
}

</style>


<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script> -->
