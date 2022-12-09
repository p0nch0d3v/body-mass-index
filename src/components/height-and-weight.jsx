import { Fragment } from "preact";
import { useRef, useState } from 'preact/hooks';
import Results from "./results";

function HeightAndWeightInput({ onCalculate }) {
    const height_ref = useRef(null);
    const weight_ref = useRef(null);

    return (
        <div>
            <section>
                <span>Height</span>
                <input
                    type="number"
                    min={1}
                    max={2.5}
                    step={0.1}
                    placeholder="Height"
                    aria-label="Height"
                    ref={height_ref}
                />
                <span>mts.</span>
            </section>

            <section>
                <span>Weight</span>
                <input
                    type="number"
                    min={1}
                    max={500}
                    step={0.1}
                    placeholder="Height"
                    aria-label="Height"
                    ref={weight_ref}
                />
                <span>kgs.</span>
            </section>

            <section>
                <button
                    type="button"
                    onClick={() => { onCalculate(weight_ref.current.value, height_ref.current.value); }}
                >Calculate</button>
            </section>
        </div>
    );
}

export default HeightAndWeightInput;