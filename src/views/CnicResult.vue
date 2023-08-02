<template>
<div class="container mx-auto ">
    <h1 class=" text-center font-bold text-2xl text-blue-800 py-4 tracking-tight ">Searched Record in the NADRA<br /> Database</h1>
    <div class="flex flex-wrap bg-white text-gray-700 rounded-xl shadow-lg p-4 mx-80">
        <div class="mt-4 flex gap-4 w-1/2">
            <label class="font-bold" for="employee_id">CNIC:</label>
            <p>32122-1231231-1</p>
        </div>
        <div class="mt-4 flex gap-4 w-1/2">
            <label class="font-bold " for="employee_id">Full Name:</label>
            <p>Usama Butt</p>
        </div>
        <div class="mt-4 flex gap-4 w-1/2">
            <label class="font-bold " for="employee_id">Father Name:</label>
            <p>Ubaid ullah</p>
        </div>
        <div class="mt-4 flex gap-4 w-1/2">
            <label class="font-bold " for="employee_id">D.O.B:</label>
            <p>01/01/2000</p>
        </div>
        <div class="mt-4 flex gap-4 w-1/2">
            <label class="font-bold " for="employee_id">Date of Issuance:</label>
            <p>01/01/2018</p>
        </div>
        <div class="mt-4 flex gap-4 w-1/2">
            <label class="font-bold " for="employee_id">Date of Expiry:</label>
            <p>01/01/2028</p>
        </div>
        <div class="mt-4 flex gap-4 w-full">
            <label class="font-bold " for="employee_id">Address:</label>
            <p>Hostel Sadar, Rawalpindi</p>
        </div>
        <div class="mt-8 flex w-full justify-between">
           <div class=" flex gap-4 justify-center">
            <button
              @click.prevent="searchFbr"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Search for FBR Records
            </button>
            <button
              @click.prevent="searchTelco"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
            Search for TELCO Records
            </button>
           </div>
            <button
              @click.prevent="goBack"
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
             Go Back
            </button>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            data: "",
            record: "",
        };
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'home' });
        },
        searchFbr() {
            this.$router.push({ name: 'fbr' });
        },
        searchTelco() {
            this.$router.push({ name: 'telco' });
        },
    },
};
</script>
