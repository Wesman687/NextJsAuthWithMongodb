import Image from "next/image";
import Login from "./components/Login";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="bg-blue-900 w-screen h-screen flex items-center font-bold">
          <div className="text-center w-full flex items-center flex-col">
            <Login />
            <p className="my-3">Don't have an account? <Link href="register" className="mx-2 underline text-blue-600">Register</Link></p>
          </div>
        </div>
      </>

  );
}
