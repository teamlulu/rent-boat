<template>
    <div class="card mt-3">
            <div class="card-header">
                <form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="inputNumberOfVM">Machines Virtuelles</label>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <input v-model="recupVM" type="text" class="form-control" id="inputNumberOfVM" placeholder="Nombre de VM">
                        {{recupVM}}
                    </div>
                </form>
            </div>
            <div v-for="i in Number(recupVM)" :key="i"><UneVM :index="i"></UneVM></div>
        </div>
</template>
<script>
import UneVM from '@/components/UneVM.vue'
export default{
    name:'MachineVirt',
    components: {
        UneVM
    },
    data(){
        return{
            recupVM : 0
        }
    }
}
</script>

<!-- <template>
    <div class="card mt-3">
      <div class="card-header">
        <form class="form-inline">
          <div class="form-group mb-2">
            <label for="inputNumberOfVM">Machines Virtuelles</label>
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <input v-model="recupVM" type="number" class="form-control" id="inputNumberOfVM" placeholder="Nombre de VM">
          </div>
        </form>
      </div>
      <div v-for="(vm, index) in virtualMachines" :key="index">
        <UneVM :index="index"></UneVM>
      </div>
    </div>
  </template>
  
  <script>
  import UneVM from '@/components/MachineVirt.vue'
  
  export default {
    name: 'MachineVirt',
    components: {
      UneVM
    },
    data() {
      return {
        recupVM: 0,
      }
    },
    computed: {
      virtualMachines() {
        const machines = []
        for (let i = 0; i < this.recupVM; i++) {
          machines.push({ id: i })
        }
        return machines
      }
    }
  }
  </script> -->
  