import { createBoard } from '@wixc3/react-board';
import MyPfimeReactComponent from '../../../src/components/my-pfime-react-component/my-pfime-react-component';

export default createBoard({
    name: 'MyPfimeReactComponent',
    Board: () => <MyPfimeReactComponent />,
});
