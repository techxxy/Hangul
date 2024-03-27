import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
        <div className="mt-4">
          {!session ?
            <p className="text-red-800 text-lg tracking-tight">You are not signed in.</p>
            :
            <p className="text-green-800 text-lg tracking-tight">You are signed in.</p>
          }
        </div>
    </main>
  );
}
