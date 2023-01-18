import { useState } from "react";

function Detective() {

    const [sherlock, setSherlock] = useState('Психопат')

    return (
        <div>
            <h1>Шерлок - {sherlock}</h1>
        </div>
    )
}

export default Detective;