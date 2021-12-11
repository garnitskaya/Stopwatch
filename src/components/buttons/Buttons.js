import './buttons.scss';

const Buttons = ({ toggleStart, reset, waitRef, active }) => {

    const activeLabel = active ? 'stop' : 'start';

    return (
        <>
            <button className='btn' onClick={toggleStart}>{activeLabel} </button>
            <button className='btn' onClick={reset}>reset</button>
            <button className='btn' ref={waitRef}>wait</button>
        </>
    )
}

export default Buttons;