import Button from "@/components/Button";
import FlexRow from "@/components/FlexRow";
import MainTitle from "@/components/MainTitle";
import FlexCol from "@/components/FlexCol";
import FullWidthContainer from "@/components/FullWidthContainer";
import FullContainer from "@/components/FullContainer";
import Container from "@/components/Container";
export default function Home() {
  return (
    <div>
      <div className="text-cyan-800">Test</div>
      <Button outlined className="w-[100px]">
        Bye
      </Button>

      <MainTitle className="font-bold text-[100px]">Hello</MainTitle>

      <FlexRow className="items-center">
        <Button positive>Someething</Button>
        <MainTitle>Test Flex</MainTitle>
      </FlexRow>

      <FlexCol className="items-center">
        <Button negative>Flex Col</Button>
        <MainTitle>Flex Col</MainTitle>
      </FlexCol>

      <FullContainer>
        <FlexRow className="bg-slate-900 items-center">
          <MainTitle className="text-white">Something</MainTitle>
          <Button negative>Flex Col</Button>
        </FlexRow>
      </FullContainer>

      <Container allCenter flexRow fullWidth fullHeight className="bg-red-400">
        <div className="bg-pink-400 p-2">Hello</div>
        <div>Bye</div>
      </Container>
    </div>
  );
}
