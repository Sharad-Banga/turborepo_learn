"use client"

import {TextInput} from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const dd = 23;
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
      <button onClick={()=>router.push(`/chat/${dd}`)}>Join room</button>
      </div>
    </div>
  );
}
