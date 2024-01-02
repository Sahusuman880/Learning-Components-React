function Random(){
  let number=Math.floor(Math.random()*10);
  return <h1 style={{color:"green"}}>Random Number is {number}</h1>
}
export default Random;