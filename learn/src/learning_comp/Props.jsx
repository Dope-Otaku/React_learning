// this jsx is only for learning and practising props and how they are passed!
// let us say we will create an invoice project for three different customers for a restaurant

//this funcion is created using props validation
function UsingProps(props) {
  return (
    <h1>
      hello {props.name} your food amount is: ${props.amount}{" "}
    </h1>
  );
}

//this function is created using destructuring
function UsingDestructuring({ name, amount }) {
  return (
    <h1>
      hi! {name} your total would be: ${amount}
    </h1>
  );
}

function Props() {
  return (
    <>
      {/* first method is using props validation  */}
      <UsingProps name={"souvik"} amount={23} />
      <UsingProps name={"eshita"} amount={34} />
      <UsingProps name={"tanya"} amount={56} />

      <UsingDestructuring name={"harry"} amount={90} />
      <UsingDestructuring name={"hermoine"} amount={55} />
      <UsingDestructuring name={"ron"} amount={34} />
    </>
  );
}

export default Props;
