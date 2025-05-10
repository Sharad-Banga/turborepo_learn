import {TextInput} from "@repo/ui/text-input";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div  style={{
      height : "100vh",
      width : "100vw",
      display : "flex",
      justifyContent : "center",
      alignItems : "center"
    }}>

      <div>
        <TextInput placeholder="enter code"></TextInput>
      <button onClick={()=>router.push("/chat/123")}>Join room</button>
      </div>
    </div>
  );
}
