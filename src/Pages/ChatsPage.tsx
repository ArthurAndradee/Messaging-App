import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props: { user: { username: string; secret: string; }; }) => {

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"a9234f92-c4e5-4325-a7c6-eb56ffc98e01"}
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100vh'}}
      />
    </div>
  );
};

export default ChatsPage;