import Card from "../components/Card";
import Container from "../components/Container";

export default function CardSection() {
  return (
    <>
      <div className=" bg-hejo-20 w-full">
        <Container>
          <div className=" flex justify-center pt-10">
            <h2 className=" text-[48px] font-bold text-donk-30">
              Home recommendations for you
            </h2>
          </div>
          <div className=" pt-10">
            <Card />
          </div>
          <div className=" flex justify-center py-10">
            <button className=" text-[28px] hover:text-donk-30">
              See more ...
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}
