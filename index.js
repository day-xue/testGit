
async function fn1 (){
  await fn2()
  console.log(3)
}
async function fn2(){
  console.log(2)
}
fn1()
console.log(1)
console.log('我修改了index.js文件')
