import { useEffect, useRef } from "react";

const ModalComp=({isOpen,onClose,children})=>{
    const modalRef = useRef();
    useEffect(()=>{
        if(isOpen) modalRef.current?.focuc();
    },[isOpen])
    useEffect(()=>{
        const handleEsc =(e)=>{
            if(e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleEsc)
        return ()=> document.removeEventListener('keydown', handleEsc)
    },onClose)

    if(!isOpen) return null
    return <div className="backdrop-gray" style={{background: 'gray'}} onClick={onClose}>
        <div className="modalhighlight-area" onClick={(e)=>e.stopPropagation()}>
            {children}
            <button onClick={onClose}>close</button>
        </div>
    </div>
}
export default ModalComp;

//   const [isOpen,setIsOpen] = useState(false)
//  <button onClick={()=>setIsOpen(true)}>Open modal</button>
//       <ModalComp isOpen={isOpen} onClose={()=>setIsOpen(false)}>
//         <h1>Hello Genpact</h1>
//         <p>this is modal component</p>
//         </ModalComp>