import {View, StatusBar} from 'react-native';
import Home from './component/Home';
import FullPost from './component/FullPost';


const App = () => {

  return (
   <View>
     <Home/>
    <StatusBar theme="auto" />
    </View>
  );
};

export default App;