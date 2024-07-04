import { useState } from "react"
import './Folder.css'


function Folder({explorer,handleInsertNode}){
    const [isFolder,setIsFolder] = useState(null)
    const [expand,setExpand] = useState(false)
    const [showInput,setShowInput] = useState({
        visible:false,
        isFolder:null
    })

    const handleNewFolder =(e,isFolder)=>{
        e.stopPropagation()
        setShowInput({visible:true,isFolder})
        setExpand(true)
    }

    const onAddFolder = (e)=>{
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput,visible:false})
        }
    }

    if(explorer.isFolder)
    {return (<div style={{marginTop:5,marginLeft:12}}>
        <div onClick={()=>{setExpand(!expand)}} className="folder">
            <span>📁{explorer.name}</span>
            <div>
                <button className="button" onClick={(e)=>handleNewFolder(e,true)}>Folder ➕</button>
                <button onClick={(e)=>handleNewFolder(e,false)} className="button">File ➕</button>
            </div>
        </div>
        {showInput.visible ? (<div className="inputContainer"><span>{showInput.isFolder ? "📁" : "📄"}</span> <input
        onKeyDown={onAddFolder} className="inputContainer__input" autoFocus 
        onBlur={()=>setShowInput({...showInput,visible:false})} type="text"/>
        </div>) : (null)}
       { expand && <div>
            {explorer.items.map((exp)=>{
                return (
                    <Folder handleInsertNode={handleInsertNode} explorer={exp} key={exp.id}/>
                )
            })}
        </div>}
    </div>)}else{
        return(<div className="file" style={{marginTop:5,marginLeft:12}}>
            {explorer?.name && <span >📄{explorer.name}</span>}
            </div>)
    }
}

export default Folder