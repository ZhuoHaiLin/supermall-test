<template>
    <div id="Mian">

        <div class="login">
           <img src="@/assets/img/logo.png" alt="">
        </div>

        <div class="content">
            <div>账户<input type="text"  v-model="username" placeholder="请输入账户" ></div> 
            <div>密码<input type="password" v-model="userpassword"  placeholder="请输入密码"></div> 
        </div>
        <div class="footer">
            <button @click="Login">Login in</button>
        </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'admin',
                userpassword:''
            }
        },
        methods: {
            Login(){
                this.$router.push('/')
            }
        },
        
    }
</script>

<style  scoped>
#Mian{
    background-color:var(--color-tint);
    height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    
}
.login img{
    width: 100px;
    height: 100px;
}
.login{
    margin-top: 100px;
    margin-bottom: 30px;
}
.content{
    padding: 20px 30px;
    border-radius: 20px;
    height: 125px;
    background: #fff;
}
.content div {
    font-size: 18px;
    margin-bottom: 20px;
}
.content div input{
    height: 30px;
    outline-color: invert ;
	outline-style: none ;
	outline-width: 0px ;
	border: none ;
	border-style: none ;
	text-shadow: none ;
	-webkit-appearance: none ;
	-webkit-user-select: text ;
	outline-color: transparent ;
	box-shadow: none;
    padding-left: 20px;
}

.footer{
     margin-top: 30px; 
     box-sizing: content-box;
     width: 100%;
     display: flex;
     justify-content: center;
}
.footer button {
    box-sizing: content-box;
     border:none;
      width: 88%;
     border-radius: 20px;
     height: 50px;
     background: #fff;
     font-size: 18px;
     outline:none
     
     
     
};
</style>