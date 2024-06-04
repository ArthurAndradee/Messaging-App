import { useState } from "react";
import "./App.css";
import AuthPage from "./Pages/Authpage";
import ChatsPage from "./Pages/ChatsPage";

interface User {
  username: string;
  secret: string;
}

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  if (!user) {
    return <AuthPage onAuth={(user: User) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;