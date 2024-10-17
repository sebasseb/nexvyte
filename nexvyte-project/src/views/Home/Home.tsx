import CustomButton from "../../components/Button/Button";

function Home() {
  return (
    <div>
      Home
      <CustomButton
        onClick={() => alert("Hola")}
        size="large"
        type="primary"
        color="danger"
        variant="filled"
      >
        Primary
      </CustomButton>
    </div>
  );
}

export default Home;
