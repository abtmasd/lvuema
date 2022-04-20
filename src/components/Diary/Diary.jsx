import React, { useState } from 'react';
import './diary.css';

export default function Diary() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);

  const Text = () => (
    <div id="note">
      <div className="notelist">
        <div className="mynote">
          <h2>Ema</h2>
          Today! I don't know why. <br />
          <br />
          I'm in your side and you're in mine. We're too closer than ever
          before. Is this that we desire to live? The desire is always mean to
          love in use. The desire is our love. The aimless life is the desire
          with living without the goal. When will the day come, we will die
          together in our love?
          <br />
          <strong> Ema </strong> <br />
          You are the beautiful, I am in love with. How can I compear a beauty,
          I never seen such like ever in my life. <br />
          Do you know <em> My Queen</em>, your are further more beautiful than
          the most beautiful star in the northern sky <em>Polarish</em>! Nor
          even the moon can be close to you. <br />
          <p>Be beautiful always, be my queen too.</p>
          <p> Love me as your love is!</p>
          "THE TRUEST BEAUTY & THE MOST BEAUTIFUL" is my Ema...... <br />
          <p>
            Hey pretty... <br />I wanna have a cuddle with you
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="diary" onClick={onClick}>
        Personal Diary
      </div>
      {showText ? <Text /> : null}
    </>
  );
}
