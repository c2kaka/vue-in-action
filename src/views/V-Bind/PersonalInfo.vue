<template>
    <div>
        <label for="区号">区号：
            <select :value="phoneInfo.areaCode" @change="handleAreaCodeChange">
                <option value="+86">+86</option>
                <option value="+60">+60</option>
            </select>
        </label>
        <label for="手机号">手机号：
            <input type="number" :value="phoneInfo.phone" placeholder="手机号" @input="handlePhoneChange"/>
        </label>
        <label for="邮编">邮编：
            <input type="number" :value="zipCode" placeholder="邮编" @input="handleZipCodeChange">
        </label>
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo",
        model:{
            prop: 'phoneInfo',
            event: 'change'
        },
        props: {
            phoneInfo: Object,
            zipCode: String
        },
        methods:{
            handleAreaCodeChange(e){
                this.$emit('change',{
                    ...this.phoneInfo,
                    areaCode: e.target.value
                })
            },
            handlePhoneChange(e){
                this.$emit('change',{
                    ...this.phoneInfo,
                    phone: e.target.value
                })
            },
            handleZipCodeChange(e){
                this.$emit('update:zipCode',e.target.value);
            }
        }
    }
</script>

<style scoped>

</style>