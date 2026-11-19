const BUILT = ['a memory', 'a way to publish', 'a way to prove it', 'a way to keep some of it private']

/** The diff: four struck lines that are built, then the one lime line you write. */
export function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <span className="lab">Why a template</span>
        <h2 className="thin">Every agent that publishes needs the same four things.</h2>
        <ol className="diff">
          {BUILT.map(need => (
            <li key={need} className="del">
              <i>−</i>
              <b>{need}</b>
              <span className="pill">Built</span>
            </li>
          ))}
          <li className="add">
            <i>+</i>
            <b>the brain</b>
            <span className="pill ok">You write this</span>
          </li>
        </ol>
        <p className="thin after">
          None of the first four is the interesting part. <em>So the brain is the only part you write.</em>
        </p>
      </div>
    </section>
  )
}
