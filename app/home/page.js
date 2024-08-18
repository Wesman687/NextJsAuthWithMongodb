import React from "react";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "../components/Logout";

const HomePage = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center font-bold">
      <div className="text-center w-full flex items-center flex-col">
        <div className="flex flex-col items-center m-4">
          <h1 className="text-white text-2xl my-2">Welcome</h1>
          {session?.user?.image ? (
            <>
              <h1 className=" text-white text-3xl my-2">
                {session?.user?.name}
              </h1>
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={72}
                height={72}
                className="rounded-full"
              />
            </>
          ) : (
            <h1 className="text-white text-3xl my-2">{session?.user?.email}</h1>
          )}

          <Logout />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
