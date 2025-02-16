<template>
   <el-row class="login-container" justify="center" :align="'middle'">
        <el-card style="max-width: 480px;">
            <template #header>
                <div class="card-header">
                    <img :src="imgUrl" alt="">
                </div>
            </template>
            <div class="jump-link">
                <el-link type="primary" @click="handleChange">{{ loginType === 0? '注册账号' : '返回登录' }}</el-link>
            </div>
            <el-form 
            :model="loginForm" 
            :rules="rules"
            class="demo-ruleForm"
            >
                <!-- prop属性，在使用了 validate、resetFields 的方法时，该属性是必填的。 -->
                <el-form-item prop="userName">
                    <el-input v-model="loginForm.userName" placeholder="手机号" :prefix-icon="UserFilled"></el-input>
                </el-form-item>               
                 <el-form-item prop="passWord">
                    <el-input v-model="loginForm.passWord" type="password" placeholder="密码" :prefix-icon="Lock"></el-input>
                </el-form-item>
                <el-form-item v-if="loginType" prop="validCode">
                    <el-input v-model="loginForm.validCode" placeholder="验证码" :prefix-icon="Lock">
                      <template #append>
                        <span @click="sendValidCode" >{{ countDown.validText }}</span>
                      </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="text-align: center; width: 100%;"
                  :click="submitForm"
                  >
                    {{ loginType === 0? '登录' : '注册' }}
                  </el-button>
                </el-form-item>
            </el-form>
        </el-card>
   </el-row>
</template>``

<script setup>
import { ref,reactive } from 'vue'
const imgUrl = new URL('../../../public/login-head.png', import.meta.url).href

const loginForm = reactive({
    userName: '',
    passWord: '',
    validCode:''
})

//用户名校验
const validateUser = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    } else {
       const phoneReg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
       phoneReg.test(value) ? callback() : callback(new Error('请输入正确的手机号'))
    }
}
//密码校验
const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
      const reg = /^[a-zA-Z0-9_-]{4,16}$/
      reg.test(value) ? callback() : callback(new Error('密码格式不对,需要4到16位字母/数字/下划线/减号'))
    }
}
//表单校验
const rules = reactive({
    userName: [{validator: validateUser,trigger: 'blur'}],
    passWord: [{validator: validatePass,trigger: 'blur'}],

})


//发送短信
const countDown = reactive({
    validText: '获取验证码',
    count: 60
})

//没有点击过发送短信
let flag = false
const sendValidCode = () => {
    //如果已经发送过短信，则不再发送
    if(flag) return
    //手机号正则
    const phoneReg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
  // 判断手机号是否正确
  if (!loginForm.userName || !phoneReg.test(loginForm.userName)) {
    return ElMessage({
      message: '请检查手机号是否正确',
      type: 'warning',
    })
  }
    //倒计时
   const time = setInterval(() => {
        if(countDown.count <= 0){
            countDown.validText = '获取验证码'
            countDown.count = 60
            flag = false

            clearInterval(time)
        } else {
            countDown.count--
            countDown.validText = `剩余${countDown.count}s`
        }

    },1000)
    flag = true
}


const loginType = ref(0) 
// 点击切换登录或注册 0-登录 1-注册
const handleChange = () => {
    loginType.value = loginType.value === 0? 1 : 0
    loginForm.userName = ''
    loginForm.passWord = ''
}

//表单提交
const submitForm = () => {}



</script>

<style lang="less" scoped>
  :deep(.el-card__header) {
    padding: 0
  }
  .login-container {
    height: 100%;
    .card-header{
      background-color: #899fe1;
      img {
        width: 430px;
      }
    }
    .jump-link {
      text-align: right;
      margin-bottom: 10px;
    }
  }
  
</style>