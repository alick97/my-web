<template>
<div>
<p>welcome to login in page <span v-if="isAuthorizedOk()"> , {{ store.state.auth.user.name }} </span></p>
<Form ref="formInline" :model="formInline" :rules="ruleInline">
    <FormItem prop="name">
        <Input type="text" v-model="name" placeholder="Username"></Input>
    </FormItem>
    <FormItem prop="password">
        <Input type="password" v-model="password" placeholder="Password"></Input>
    </FormItem>
    <FormItem>
        <Button type="primary" @click="handleSubmit">Signin</Button>
    </FormItem>
</Form>

</div>
</template>
<script setup lang="ts">
import { Form, FormItem, Input, Button } from "view-ui-plus";
import { reactive, ref, watch } from "vue";
import { useStore } from "../../store";

const store = useStore();

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

function isAuthorizedOk() {
    return store.state.auth.isAuthenticated;
}

watch(() => store.state.auth.isAuthenticated, () => {
    if (isAuthorizedOk()) {
      name.value = store.state.auth.user.name;
    } else {
      name.value = "";
    }
})

</script>