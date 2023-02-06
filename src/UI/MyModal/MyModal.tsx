import React from 'react';
import cl from './MyModal.module.css'

type PropsType = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    children: React.ReactElement | React.ReactNode;
}

const MyModal = (props: PropsType) => {
const {visible, setVisible, children} = props;
    const classModal = [cl.myModal]

    if (visible) {
        console.log('visible', visible)
        classModal.push(cl.active);
    }

    return (
        <div className={classModal.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;