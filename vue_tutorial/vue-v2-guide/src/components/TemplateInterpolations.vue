<template>
<div>
    <fieldset>
        <legend> v-once v-html test</legend>
        <span>Message: {{ msg1 }}</span><br>
        <span v-once>v-once Message: {{ msg1 }}</span><br>
        show v-html: <span v-html="msg1"></span><br>
        <input type="text" v-model.lazy.trim="msg1" />
    </fieldset>
    <fieldset>
        <legend>full js express supporting in template</legend>
        <p>{{ msg2.split('').reverse().join('') }}</p>
        <input type="text" v-model.lazy.trim="msg2" />
    </fieldset>
</div>
</template>


<script>

export default {
    name: "TemplateInterpolations",
    components: {
    },
    data() {
        return {
            msg1: "msg1",
            msg2: "msg2"
        }
    },
    
}
</script>

