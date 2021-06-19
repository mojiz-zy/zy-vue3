<template>
  <el-form label-position="top" label-width="80px">
    <el-form-item label="LabID">
      <el-input v-model="lab.number"></el-input>
    </el-form-item>
    <br />
    <el-form-item label="ComputerNmber">
      <el-input v-model="lab.computerNumber"></el-input>
    </el-form-item>
    <el-button @click="submit" type="primary" icon="el-icon-upload2"
      >SUBMIT</el-button
    >
  </el-form>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { State } from "@/store";
import * as types from "@/store/VuexTypes";
import { Lab } from "@/datasource/Type";
export default defineComponent({
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  },
  setup() {
    const store = useStore<State>();
    console.log("labAdd", store.state.labList);

    const lab = ref({
      number: "",
      computerNumber: ""
    });
    const lablist = store.state.labList;
    const submit = () => {
      let flag = true;
      lablist?.forEach(l => {
        if (lab.value.number == l.number) {
          flag = false;
          alert("Added lab successfully");
        }
      });
      if (
        flag == true &&
        typeof lab.value.number &&
        typeof lab.value.computerNumber
      ) {
        store.commit(types.ADD_LAB, {
          number: lab.value.number,
          computerNumber: lab.value.computerNumber,
          schedule: []
        } as Lab);
        console.log("commit", lab);
      }
      store.dispatch(types.ADD_LAB, lab.value); //发送新添加的lab信息
    };
    return {
      lab,
      submit
    };
  }
});
</script>
