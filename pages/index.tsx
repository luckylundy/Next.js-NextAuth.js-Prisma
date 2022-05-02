// import { useSession, signIn, signOut } from "next-auth/react";
import ProtectedPage from "../components/ProtectedPage";

// const IndexPage = () => {
//   const { data: session, status } = useSession();
//   const loading = status === "loading";

//   if (loading) return null;

//   return (
//     <>
//       {!session && (
//         <>
//           Not signed in <br />
//           <button onClick={() => signIn("google")}>Sign in</button>
//         </>
//       )}
//       {session && (
//         <>
//           Signed in as {session.user.id} <br />
//           <button onClick={() => signOut()}>Sign out</button>
//         </>
//       )}
//     </>
//   );
// };

const IndexPage = () => {
  return (
    <ProtectedPage>
      <p>🍭🍭🍭🍭🍭🍭</p>
    </ProtectedPage>
  );
};

export default IndexPage;
