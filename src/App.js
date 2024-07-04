import { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder'
import useTraverseTree from './hooks/use-traverse-tree';
function App() {
  const [explorerData,setExplorerData] = useState(explorer)
  const {insertNode}=  useTraverseTree()
  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)
    console.log("🚀 ~ handleInsertNode ~ insertNode:", insertNode)
    console.log("🚀 ~ handleInsertNode ~ finalTree:", finalTree)
    setExplorerData(finalTree)
  }
  return (
    <div style={{marginTop:27,marginLeft:12}}>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  );
}

export default App;
