let user = {
  firstname: "Navdeep",
  lastname: "Sharma",
};

function formatName(user) {
  return user.firstname + " " + user.lastname;
}

const JSX = () => {
  const name = "Navdeep";
  return (
    <>
      <h1> Hello {name} </h1>
      <h2> Hello {formatName(user)} !</h2>
    </>
  );
};

export default JSX;
