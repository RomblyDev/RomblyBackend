import setPlayerBp from "./setPlayerBp";

type MessageHandler = (message: string) => Promise<void>

const messageHandlers: Record<WSMessageType, MessageHandler> = {
  [WSMessageType.SetPlayerBP]: setPlayerBp
};

const handleMessage = (messageType: WSMessageType, message: string) => {
  messageHandlers[messageType](message);
};

export default handleMessage;