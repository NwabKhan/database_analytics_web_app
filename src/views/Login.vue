<template>
    <div class="container mx-auto ">
      <h1 class=" text-center font-bold text-4xl text-blue-800 py-4 tracking-tight ">Data Analytic Tool to Search Through <br /> Multiple Databases</h1>
      <div class="flex justify-center h-96 items-center">
        <div class="w-full max-w-md">
            <form v-if="!success" class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
             <span v-if="error" class=" text-red-600 font-medium text-base flex justify-center mb-2">{{errorMessage}}</span>
            <div class="mb-4">
              <label class="block text-gray-700 text-base font-semibold mb-4" for="key">
                Enter your Secret Key to Access
              </label>
              <input
                v-model="typedKey"
                @input="clearError"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="key"
                type="password"
                placeholder="Enter Secret key"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                @click.prevent="verification"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Go to Portal
              </button>
            </div>
          </form>
          <div v-if="success && !granted" class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex items-center flex-col gap-2">
            <div class="custom-loader"></div>
            <span>Granting Access ...</span>
          </div>
          <div v-if="granted" class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex justify-center">
            <span class=" font-medium text-lg">Access Granted Succesfully!</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script >
  // import axios from "axios";
  
  export default {
    data() {
      return {
        granted: false,
        success: false,
        error: false ,
        typedKey : "",
        errorMessage: "",
        secretKey : "Horizon@123"
      };
    },
    methods: {
     async verification(){
        if(this.typedKey === this.secretKey){
            this.success = true
             await new Promise((resolve) => setTimeout(resolve, 1200));
            this.granted = true
             await new Promise((resolve) => setTimeout(resolve, 800));
            this.$router.push({ name: 'home' });
        }else if(this.typedKey === ""){
            this.errorMessage = "Please Enter Key.. "
            this.error = true
        }
        else{
            this.errorMessage = "Incorrect Key!"
            this.error = true
            this.typedKey = ""
        }
      },
      clearError(){
        this.error = false
      }
    },
  };
  </script>
  
  
  