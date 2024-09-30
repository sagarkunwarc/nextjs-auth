import { authOptions } from "@/options";
import { getServerSession } from "next-auth"
import GoogleButton from "./google-button";
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await getServerSession(authOptions);

  console.log({session:session})

  if (session){
    redirect("/admin")
    // return (
    //   <div>
    //   <h1>You are logged in. </h1>
    //   <br />
    //   </div>
    // )
  }

  return <div>
  <h1>Next JS Google Authentication Practice</h1>
  <br />
  <GoogleButton />
  </div>
}
