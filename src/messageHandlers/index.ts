import setPlayerBp from "./setPlayerBp";

const messageHandlers: Record<WSMessageType, (message: string) => void> = {
  [WSMessageType.SetPlayerBP]: setPlayerBp
};

const handleMessage = (messageType: WSMessageType, message: string) => {
  messageHandlers[messageType](message);
};

export default handleMessage;