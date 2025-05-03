<template>
<div>
  <el-container>
    <el-header class="text-center mt-16 mb-8 text-3xl">
        Welcome to login in x-zero<span v-if="isAuthorizedOk">, {{ store.state.auth.user.name }} </span>
    </el-header> 
    <el-main>
      <div class="flex justify-center">
        <el-form ref="formRef" :model="formInline" :rules="rules" label-position="left" label-width="auto">
            <el-form-item label="name" prop="name" required>
                <el-input type="text" v-model="formInline.name" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item label="password" prop="password" required>
                <el-input type="password" v-model="formInline.password" show-password placeholder="Password"></el-input>
            </el-form-item>
            <div class="flex justify-around mt-8">
                <el-button type="primary" @click="handleSubmit">Signin</el-button>
                <el-button type="primary" @click="resetForm">Reset</el-button>
            </div>
        </el-form>
      </div>
    </el-main>
    <el-footer>
        
    </el-footer>
  </el-container>
  

</div>
</template>
<script setup lang="ts">
import { reactive, ref, watch, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { useStore } from "../../store";

const store = useStore();
const router = useRouter();
const formRef = ref<FormInstance>();

interface AuthParam {
    name: string;
    password: string;
}

const formInline = reactive<AuthParam>({
    name: '',
    password: '',
});

const rules = {
    name: [
        { required: true, message: "Please fill in the user name", trigger: "blur" },
    ],
    password: [
        { required: true, message: "Please fill in the password", trigger: "blur" },
        { type: "string", min: 6, message: "The password length cannot be less than 6 bits", trigger: "blur" }
    ]
}


const handleSubmit = async () => {
    if (!formRef.value) return
    try {
        const res = await formRef.value.validate()
        console.log("submit ", formInline.name, formInline.password, res)
        await store.dispatch("auth/authorize", {name: formInline.name, password: formInline.password})
    } catch (error) {
        ElMessage.error("login failed")
        console.log("login error", error)
    }
}

function resetForm() {
    if (!formRef.value) return
        formRef.value.resetFields()
    }

const isAuthorizedOk = computed(() => {
    return store.getters["auth/isAuthorizedOk"];
});

const toHome = () => {
    const s = 5;
    ElMessage.success({"message": `redirect after ${s}s`, "duration": s*1000-100});
    setTimeout(() => {
        console.log("success login, go home ...");
        router.push({name: "home"});
    }, s * 1000);
}

watch(() => isAuthorizedOk.value, (isOk) => {
    console.debug("is auth ok change,", isOk);
    if (isOk) {
        toHome()
    } else {
    }
})

onMounted(() => {
    if (isAuthorizedOk.value) {
        toHome()
    }
})

</script>
<style lang="scss" scoped>

</style>