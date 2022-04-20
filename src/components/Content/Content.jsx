import React from 'react';
import './content.css';

export default function Content() {
  return (
    <div id="ema-feel">
      <div id="myfeel">
        Do you know, what I do feel about you? Nothing, not nearly anything.{' '}
        <br /> But, I feel like I am feeling something!
        <div>
          তার পরেও কিছু কথা যে থাকে বাকি... <br />
          বলা না বলার মাঝে থাকে অনেক কিছু! <br />
          সেই সবকিছু নিয়েই তো শেষ-শুরুর গল্প আমাদের... <br />
          কিছু আনন্দ, কিছু গল্প... কিছু দুঃখ অনুভূতি! <br />
          এভাবেই না হয় পার করে দিবো... <br />
          বাকিটা জীবন দূর্দশায় 😋
        </div>
      </div>
    </div>
  );
}
function HideHeader() {
  document.getElementByID('myfeel').style.display = 'block';
}
