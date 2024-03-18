import { useEffect } from "react";

export function useClickOutside(ref: any, setState: any) {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && event.target.id != 'burger') {
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