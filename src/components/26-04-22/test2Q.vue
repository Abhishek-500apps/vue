<template>
  <div>
    <h3>
      2.Write a JavaScript program to calculate multiplication and division of
      twonumbers (input from user)
    </h3>
 
      1st Number : <input type="text" id="firstNumber" required /><br />
      2nd Number: <input type="text" id="secondNumber" required /><br />
      <button type="submit" @click="multiplyBy()" value="Multiply">Multiply</button>
      <button type="button" @click="divideBy()" Value="Divide" >division</button>
   
   
  </div>
</template>
<script>
export default {
    name:"AbhI",
    data(){
        return{

        }
        },
        methods:{
        multiplyBy(){
            let a= document.getElementById("firstNumber").value;
            let b= document.getElementById("secondNumber").value;
            document.write("Result is:"+a*b)
        },
        
        
        divideBy(){
            let a= document.getElementById("firstNumber").value;
            let b= document.getElementById("secondNumber").value;
            document.write("Result is :"+a/b)
        
            
        
        
        }

    }
}
</script>

<style>
</style>