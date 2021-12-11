import { createRef, useEffect, useState } from 'react';
import { interval, Subject, debounceTime, filter, map, fromEvent } from 'rxjs';
import { takeUntil, tap, buffer } from "rxjs/operators";

import Buttons from '../buttons/Buttons';
import Timer from './../timer/Timer';

import './app.css';

function App() {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const waitRef = createRef();

    useEffect(() => {
        const stream$ = new Subject()

        const clicks = fromEvent(waitRef.current, 'click');
        const doubleClick = clicks.pipe(
            buffer(clicks.pipe(debounceTime(300))),
            map(click => click.length),
            filter(length => length === 2),
            tap(() => setActive(false))
        )

        const timer$ = interval(1000)
            .pipe(
                takeUntil(stream$),
                takeUntil(doubleClick),
            )
            .subscribe(() => {
                if (active) {
                    return setTime(time => time + 1)
                }
            })

        return () => {
            timer$.unsubscribe();
        }
    }, [active])

    const toggleStart = () => {
        if (!active) {
            setActive(true);
        } else {
            setActive(false);
            setTime(0);
        }
    }

    const reset = () => {
        setTime(0);
    }

    return (
        <div className="app">
            <Timer time={time} />
            <Buttons
                active={active}
                waitRef={waitRef}
                toggleStart={toggleStart}
                reset={reset} />
        </div>
    );
}

export default App;
