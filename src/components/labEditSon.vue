<template>
  <el-form label-position="top" label-width="80px">
    <el-form-item label="LabID">
      <el-input v-model="lab.number" disabled></el-input>
    </el-form-item>
    <br />
    <el-form-item label="ComputerNmber">
      <el-input v-model="lab.computerNumber"></el-input>
    </el-form-item>
    <label for="">Submit</label>
    <el-button
      @click="update"
      type="success"
      icon="el-icon-check"
      circle
    ></el-button>
    <label for="">Back to Lablist</label>
    <el-button
      @click="back"
      type="danger"
      icon="el-icon-check"
      circle
    ></el-button>
  </el-form>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";
import * as types from "@/store/VuexTypes";
import { Lab } from "@/datasource/Type";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  },
  setup() {
    const store = useStore<State>();
    const labList = computed(() => {
      return store.state.labList;
    });
    const lab = ref({} as Lab);
    const route = useRoute();
    const router = useRouter();
    const password = ref("");
    const labNum = route.query.labNum;
    labList.value?.forEach(l => {
      if (l.number == labNum) {
        lab.value.number = l.number;
        lab.value.computerNumber = l.computerNumber;
      }
    });
    const update = () => {
      store.dispatch(types.UPDATE_LAB, lab.value);
    };
    const back = () => {
      router.push("/teacher/labReserve");
    };
    return {
      back,
      update,
      lab,
      password
    };
  }
});
</script>
