<template>
  <div class="container mx-auto ">
    <h1 class=" text-center font-bold text-4xl text-blue-800 py-4 tracking-tight ">Data Analytic Tool to Search Through <br /> Multiple Databases</h1>
    <div class="flex justify-center h-96 items-center">
      <div class="w-full max-w-md">
        <form class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-base font-semibold mb-4" for="cnic">
              Enter CNIC to Search
            </label>
            <input
              v-model="cnic"
              @input="formatCnic"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnic"
              type="text"
              placeholder="Enter CNIC"
              maxlength="15"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              @click.prevent="searchNadra"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Search
            </button>
          </div>
        </form>
        <div v-if="record" class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h1 class="text-xl font-bold mb-4">Record</h1>
          <p>{{ record }}</p>
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
      cnic: "",
      record: "",
    };
  },
  methods: {
    // searchRecord() {
    //   // Call your API here with this.cnic as the parameter
    //   // Set the response to this.record
    //   console.log("cnic: ", this.cnic)
    // },
    formatCnic() {
      let cnic = this.cnic.replace(/[^0-9]/g, "");
      if (cnic.length > 5) {
        cnic = cnic.slice(0, 5) + "-" + cnic.slice(5);
      }
      if (cnic.length > 13) {
        cnic = cnic.slice(0, 13) + "-" + cnic.slice(13);
      }
      this.cnic = cnic;
    },
    async searchNadra(){
      // try {
      //   const response = await axios.get(`/api/search/${formattedCNIC}`);
      //   const userFound = response.data.userFound;
      //   if (userFound) {
      //     this.$router.push({ name: 'search-result', params: { cnic: formattedCNIC, user: response.data.user } });
      //   } else {
      //     this.$router.push({ name: 'search-result', params: { cnic: formattedCNIC, userFound: false } });
      //   }
      // }catch(err){
      // console.log("🚀 ~ file: HomeView.vue:68 ~ searchRecord ~ err:", err)
      // }
      this.$router.push({ name: 'cnic' });

    }
  },
};
</script>


