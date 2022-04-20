import React from 'react';
import './profile.css';

export default function Profile() {
  return (
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0&appId=398761262018332&autoLogAppEvents=1"
        nonce="u3ZzMtEX"
      ></script>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/abtmasd"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </>
  );
}
