const speakerCards = document.querySelector('.speaker-cards');

const speakers = [
  {
    id: 1,
    userName: 'Billions',
    title: 'Doctor',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis deserunt pariatur nesciunt obcaecati odio? Dolore molestiae quae rem.',
  },
  {
    id: 2,
    userName: 'Joel',
    title: 'Proffessor',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis deserunt pariatur nesciunt obcaecati odio? Dolore molestiae quae rem.',
  },

  {
    id: 3,
    userName: 'Mike',
    title: 'James Bond',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis deserunt pariatur nesciunt obcaecati odio? Dolore molestiae quae rem.',
  },

  {
    id: 4,
    userName: 'Shiella Grey',
    title: 'Nurse',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis deserunt pariatur nesciunt obcaecati odio? Dolore molestiae quae rem.',
  },
  {
    id: 5,
    userName: 'Daniel White',
    title: 'Nurse',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis deserunt pariatur nesciunt obcaecati odio? Dolore molestiae quae rem.',
  },
  {
    id: 6,
    userName: 'John Doe',
    title: 'Nurse',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis deserunt pariatur nesciunt obcaecati odio? Dolore molestiae quae rem.',
  },
];

for (let i = 0; i <= speakers.length; i += 1) {
  if (speakers[i] === undefined) {
    speakerCards.innerHTML += '';
  } else {
    const htmlContent = `
          <div class="speaker-card">
            <div class="left">
              <div class="speaker-card-bg">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 792.000000 796.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,796.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M0 7395 l0 -565 550 0 550 0 0 -565 0 -565 -550 0 -550 0 0 -565 0
                      -565 550 0 550 0 0 -570 0 -570 -550 0 -550 0 0 -565 0 -565 550 0 550 0 0
                      -570 0 -570 -550 0 -550 0 0 -570 0 -570 548 2 547 3 3 567 2 568 565 0 565 0
                      2 568 3 567 568 3 567 2 0 -570 0 -570 -567 -2 -568 -3 0 -565 0 -565 568 -3
                      c366 -1 567 -6 567 -12 0 -7 200 -10 570 -10 373 0 570 3 570 10 0 7 195 10
                      565 10 370 0 565 -3 565 -10 0 -7 197 -10 570 -10 370 0 570 3 570 10 0 6 201
                      11 568 12 l567 3 3 568 2 567 -570 0 -570 0 0 570 0 570 570 0 570 0 0 565 0
                      565 -570 0 -570 0 0 565 0 565 -537 1 c-296 0 -551 2 -568 2 l-30 2 -3 568 -2
                      567 570 0 570 0 0 -565 0 -565 540 -1 c297 -1 549 -1 560 -1 11 0 25 0 30 1 7
                      1 10 197 10 566 l0 565 -570 0 -570 0 0 565 0 565 570 0 570 0 0 565 0 565
                      -3960 0 -3960 0 0 -565z m2230 528 c0 -10 1 -259 3 -553 l2 -535 568 -3 567
                      -2 0 555 0 555 568 -2 567 -3 3 -552 2 -553 565 0 565 0 2 553 3 552 568 3
                      567 2 0 -555 0 -555 -570 0 -570 0 0 -565 0 -565 -565 0 -565 0 0 -565 c0
                      -445 3 -565 13 -565 6 0 261 0 565 0 l552 0 0 -570 0 -570 570 0 570 0 0 -565
                      0 -565 -570 0 -570 0 0 -570 0 -570 570 0 570 0 0 -570 0 -570 -570 0 -570 0
                      0 570 0 570 -565 0 -565 0 0 -570 0 -570 -570 0 -570 0 0 570 0 570 570 0 570
                      0 -2 568 -3 567 -567 3 -568 2 0 565 0 565 -570 0 -570 0 0 -565 0 -565 -565
                      0 -565 0 0 565 0 565 565 0 c531 0 565 1 565 18 2 339 -1 1106 -4 1109 -3 3
                      -249 4 -548 3 -299 0 -552 2 -561 6 -16 6 -17 49 -17 570 l0 564 565 0 565 0
                      0 565 0 565 -565 0 -565 0 0 555 0 555 565 0 c531 0 565 -1 565 -17z" />
                    <path d="M3370 6265 l0 -565 -570 0 -570 0 0 -564 c0 -367 3 -566 10 -568 5
                      -1 262 -2 570 0 l560 2 0 565 0 565 570 0 570 0 0 565 0 565 -570 0 -570 0 0
                      -565z" />
                    <path d="M3376 4563 c-3 -4 -6 -260 -6 -570 l0 -563 570 0 570 0 0 -565 0
                      -565 565 0 565 0 0 565 0 565 -565 0 -565 0 0 565 0 565 -537 1 c-296 0 -550
                      2 -565 4 -14 2 -29 1 -32 -2z" />
                    <path d="M1100 10 c0 -7 195 -10 565 -10 370 0 565 3 565 10 0 7 -195 10 -565
                      10 -370 0 -565 -3 -565 -10z" />
                  </g>
                </svg>
              </div>
              <div class="speaker-img">
                <img src="./images/face-${speakers[i].id}.jpeg" alt="speaker one" height="25" width="25">
              </div>
            </div>
            <div class="right">
              <div class="speaker-name">
                <h3>${speakers[i].userName}</h3>
              </div>
              <div class="speaker-title">
                <p><i>${speakers[i].title}</i>
                </p>
              <div class="line--grey"></div>
              </div>
              <div class="speaker-details">
                <p>
                  ${speakers[i].description}
                </p>
              </div>
            </div>
          </div>`;
    speakerCards.innerHTML += htmlContent;
  }
}
