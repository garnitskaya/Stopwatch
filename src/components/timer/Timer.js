const Timer = ({ time }) => {

    const getZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`
        }
        return num;
    }

    const hours = getZero(Math.floor((time / (60 * 60) % 24)));
    const minutes = getZero(Math.floor((time / 60) % 60));
    const seconds = getZero(Math.floor((time % 60)));

    return (
        <div>
            {hours}:
            {minutes}:
            {seconds}
        </div>
    )
}

export default Timer;