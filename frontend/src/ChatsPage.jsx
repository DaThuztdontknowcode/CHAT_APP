import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
const chatProps = useMultiChatLogic('580a56d9-54e6-4059-a37c-4cf0849b346c',props.user.username, props.user.secret);
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )}
export default ChatsPage