import { useEffect } from "react";

export function useClickOutside(ref: any, setState: any) {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            console.log(ref.current)
            console.log(event.target)
            console.log(!ref.current.contains(event.target))
            if (ref.current && !ref.current.contains(event.target)) {
                ref.current.blur()
                setState(false)
                document.body.style.overflow = 'auto'
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}