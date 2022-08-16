<template>
<div>
<p>welcome to login in page <span v-if="isAuthorizedOk"> , {{ store.state.auth.user.name }} </span></p>
<Form ref="form" :model="formInline" :rules="ruleInline" @on-validate="handleValidate">
    <FormItem prop="name">
        <Input type="text" v-model="name" placeholder="Username"></Input>
    </FormItem>
    <FormItem prop="password">
        <Input type="password" v-model="password" placeholder="Password"></Input>
    </FormItem>
    <FormItem>
        <Button class="form-button" type="primary" @click="handleSubmit">Signin</Button>
        <Button class="form-button" type="primary" @click="resetForm">Reset</Button>
    </FormItem>
</Form>

</div>
</template>
<script setup lang="ts">
import { Form, FormItem, Input, Button } from "view-ui-plus";
import { reactive, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../store";

const store = useStore();
const router = useRouter();
const form = ref(null);

const name = ref("");
const password = ref("");

const formInline = reactive({
    name,
    password,
});

const ruleInline = {
    name: [
        { required: true, message: "Please fill in the user name", trigger: "blur" }
    ],
    password: [
        { required: true, message: "Please fill in the password", trigger: "blur" },
        { type: "string", min: 6, message: "The password length cannot be less than 6 bits", trigger: "blur" }
    ]
}

interface AuthParam {
    name: string;
    password: string;
}

function handleSubmit() {
    console.log(formInline.name, formInline.password);
    store.dispatch("auth/authorize", {name: name.value, password: password.value})
}

function handleValidate(prop: string, status: boolean, error: string) {
    console.log("handle validate", prop, status, error);
}

function resetForm() {
    form.value?.resetFields();
}

const isAuthorizedOk = computed(() => {
    return store.getters["auth/isAuthorizedOk"];
});

watch(() => isAuthorizedOk.value, (isOk) => {
    console.log("is auth ok change,", isOk);
    if (isOk) {
      name.value = store.state.auth.user.name;
      router.push({name: "home"});
      console.log("success login, go home ...");
    } else {
      name.value = "";
    }
})

</script>
<style lang="scss" scoped>
.form-button {
    margin-right: 1rem;
}

</style>