import { ReactNode } from "react";
import { useSession, signIn } from "next-auth/react";

type Props = {
  children?: ReactNode;
};

const ProtectedPage = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  //ロード中の時
  if (loading) return null;

  //sessionがなかった時
  if (!loading && !session) {
    return <button onClick={() => signIn("google")}>Googleでサインイン</button>;
  }
  //認証が確認できた時
  return <div>{children}</div>;
};

export default ProtectedPage;
