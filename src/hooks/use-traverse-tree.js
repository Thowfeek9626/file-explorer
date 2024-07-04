const useTraverseTree =()=>{
function insertNode(tree,folderId,item,isFolder){
if(tree.id === folderId && tree.isFolder){
    tree.items.unshift({
           id: new Date().getTime().toString(),
           name:item,
           isFolder,
           items:[] 
        });
        return tree;
}
let latestNode = tree.items.map((obj)=>{
    return insertNode(obj,folderId,item,isFolder)
})
return {...tree,items:latestNode}
}
return {insertNode}
}
export default useTraverseTree