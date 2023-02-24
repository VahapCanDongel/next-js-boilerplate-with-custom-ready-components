import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Container from "@/components/Container";
import Alert from "@/components/Alert";
export default function Home() {
  return (
    <div>
      <div className="text-cyan-800">Test</div>
      <Button positive className="w-[100px]">
        Bye
      </Button>

      <Typography text>Hello</Typography>

      {/* <Container allCenter flexRow fullWidth fullHeight className="bg-red-400">
        <div className="bg-pink-400 p-2">Hello</div>
        <div>Bye</div>
      </Container> */}

      <Alert Warning>
        You have not completed the form.
      </Alert>



    </div>
  );
}
