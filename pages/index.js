import Button from "@/components/Button";
import MainTitle from "@/components/MainTitle";
import Container from "@/components/Container";
export default function Home() {
  return (
    <div>
      <div className="text-cyan-800">Test</div>
      <Button positive className="w-[100px]">
        Bye
      </Button>

      <MainTitle className="font-bold text-[100px] ">Hello</MainTitle>

      <Container allCenter flexRow fullWidth fullHeight className="bg-red-400">
        <div className="bg-pink-400 p-2">Hello</div>
        <div>Bye</div>
      </Container>
    </div>
  );
}
