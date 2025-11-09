import  { useEffect } from 'react';

const useDynamicTitle = (title) => {
    useEffect(() => {
        const mainTitle = document.title
        document.title = title
        return () => {
            document.title = mainTitle
        }
    }, [title])

};

export default useDynamicTitle;