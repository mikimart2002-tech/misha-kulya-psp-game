import { useEffect, useRef, useState } from 'react';

type Screen = 'cover' | 'story' | 'guitar' | 'drive' | 'fish' | 'proposal' | 'ending' | 'gentle';
type ArtScene = 'cover' | 'store' | 'guitar' | 'drive' | 'fish' | 'proposal';

const guitarSequence = ['A', 'S', 'D', 'F', 'D', 'S'];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function RestartIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.34-5.66M4 5v5h5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function HeartIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 20.4S4 15.2 4 9.6A4.1 4.1 0 0 1 12 7a4.1 4.1 0 0 1 8 2.6c0 5.6-8 10.8-8 10.8Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ChevronIcon({ direction = 'right' }: { direction?: 'right' | 'left' | 'up' | 'down' }) {
  const rotation = direction === 'left' ? 180 : direction === 'up' ? -90 : direction === 'down' ? 90 : 0;
  return <svg style={{ transform: `rotate(${rotation}deg)` }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SceneBackdrop({ scene }: { scene: ArtScene }) {
  if (scene === 'cover') {
    return (
      <svg className="illustration" viewBox="0 0 680 760" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ілюстрація вечора біля магазину">
        <defs>
          <linearGradient id="coverSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#789b99" /><stop offset="1" stopColor="#c67d79" /></linearGradient>
          <linearGradient id="coverGround" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d9957d" /><stop offset="1" stopColor="#8f6873" /></linearGradient>
        </defs>
        <rect width="680" height="760" fill="url(#coverSky)" />
        <circle cx="522" cy="142" r="87" fill="#f5cf94" opacity=".82" />
        <circle cx="522" cy="142" r="112" fill="none" stroke="#f5cf94" strokeOpacity=".24" strokeWidth="2" />
        <path d="M0 440 Q130 370 250 438T480 414T680 445V760H0Z" fill="url(#coverGround)" />
        <path d="M0 560 Q150 492 310 552T680 530V760H0Z" fill="#4e6d6b" opacity=".8" />
        <g transform="translate(104 239)">
          <path d="M0 138 202 50l207 88v253H0Z" fill="#f7c392" />
          <path d="m-17 143 219-103 227 100-16 31-211-91-202 91Z" fill="#805666" />
          <path d="M26 180h354v171H26Z" fill="#d47770" />
          <path d="M62 213h107v94H62ZM207 213h136v94H207Z" fill="#8ca9a0" stroke="#fff1d7" strokeWidth="9" />
          <path d="M0 351h407v57H0Z" fill="#5a626c" />
          <rect x="29" y="105" width="150" height="39" rx="7" fill="#fff0d0" />
          <text x="104" y="132" fill="#5a4a5a" textAnchor="middle" fontFamily="Georgia, serif" fontSize="25">Сімі</text>
          <path d="M59 408v62M355 408v62" stroke="#4d5a5f" strokeWidth="17" strokeLinecap="round" />
        </g>
        <g transform="translate(452 475)">
          <path d="M31 100c-9 61-10 107-13 153M73 101c9 60 14 104 27 151" stroke="#4f4c5d" strokeWidth="17" strokeLinecap="round" />
          <path d="M29 61h51l25 126H3Z" fill="#d77578" />
          <circle cx="54" cy="35" r="35" fill="#efba94" />
          <path d="M21 28c2-36 74-44 71 14-18-16-38-21-71-14Z" fill="#4c4057" />
          <path d="M21 80c-36 15-44 54-47 88M80 78c32 12 46 31 57 61" stroke="#efba94" strokeWidth="15" strokeLinecap="round" />
        </g>
        <path d="M79 618c42-34 60-34 105 0M58 647c46-32 90-33 144 0" stroke="#f6c88e" strokeWidth="2" fill="none" opacity=".56" />
      </svg>
    );
  }

  if (scene === 'store') {
    return (
      <svg className="illustration" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Вечір біля магазину «Сімі»">
        <defs><linearGradient id="storeSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#718a9b" /><stop offset=".75" stopColor="#d89983" /><stop offset="1" stopColor="#e5b782" /></linearGradient></defs>
        <rect width="1200" height="540" fill="url(#storeSky)" />
        <circle cx="1000" cy="105" r="54" fill="#f7d09a" opacity=".86" />
        <path d="M0 377q160-90 300 0t310-7q160-90 310 5t280-2v167H0Z" fill="#68887f" />
        <path d="M0 440q180-55 365 0t405-6q180-42 430 4v102H0Z" fill="#527368" />
        <g transform="translate(110 129)">
          <path d="M0 85 279 10l279 75v268H0Z" fill="#f2bd91" />
          <path d="m-25 91 304-102 305 100-17 32L279 24 0 120Z" fill="#6d5263" />
          <rect x="29" y="130" width="500" height="170" fill="#d47770" />
          <path d="M59 165h140v100H59ZM240 165h244v100H240Z" fill="#91b5ad" stroke="#fff0d2" strokeWidth="11" />
          <rect x="45" y="55" width="201" height="48" rx="8" fill="#fff0d1" />
          <text x="145" y="88" fill="#5a4456" textAnchor="middle" fontFamily="Georgia, serif" fontSize="31">магазин «Сімі»</text>
          <path d="M0 300h557v42H0Z" fill="#53606a" />
          <path d="M38 344v84M516 344v84" stroke="#48555c" strokeWidth="16" strokeLinecap="round" />
        </g>
        <g transform="translate(770 301)">
          <circle cx="60" cy="39" r="34" fill="#efbd98" /><path d="M24 34Q25-5 72 8q33 9 22 55-21-27-70-29Z" fill="#b45f65" />
          <path d="M29 76h65l22 135H5Z" fill="#d97878" /><path d="M30 78 1 173M93 78l32 82" stroke="#efbd98" strokeWidth="15" strokeLinecap="round" /><path d="M39 207 19 262M79 207l22 55" stroke="#4c5465" strokeWidth="16" strokeLinecap="round" />
        </g>
        <g transform="translate(925 311)">
          <circle cx="58" cy="37" r="32" fill="#efbd98" /><path d="M27 34Q27-6 74 4q25 7 22 47-22-24-69-17Z" fill="#4e4256" />
          <path d="M29 72h62l26 132H1Z" fill="#566a78" /><path d="M29 79 0 172M90 78l33 80" stroke="#efbd98" strokeWidth="15" strokeLinecap="round" /><path d="M38 201 20 258M79 201l19 57" stroke="#4c5465" strokeWidth="16" strokeLinecap="round" />
        </g>
        <g transform="translate(1070 302)">
          <circle cx="54" cy="42" r="34" fill="#efbd98" /><path d="M19 38Q21-5 72 7q23 7 20 46-22-27-73-15Z" fill="#885667" />
          <path d="M26 78h64l26 128H0Z" fill="#7c8e82" /><path d="M27 81 0 173M88 81l34 78" stroke="#efbd98" strokeWidth="15" strokeLinecap="round" /><path d="M37 204 20 260M77 204l24 56" stroke="#4c5465" strokeWidth="16" strokeLinecap="round" />
        </g>
        <path d="M834 288q88-41 177 1M1016 302q67-42 135-1" stroke="#f7d09a" strokeWidth="2" fill="none" opacity=".7" />
      </svg>
    );
  }

  if (scene === 'guitar') {
    return (
      <svg className="illustration" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Міша грає на гітарі для Кулі">
        <defs><linearGradient id="guitarSky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e6ae87" /><stop offset=".5" stopColor="#bc7b77" /><stop offset="1" stopColor="#655671" /></linearGradient></defs>
        <rect width="1200" height="520" fill="url(#guitarSky)" />
        <circle cx="910" cy="122" r="63" fill="#f8d39a" opacity=".75" />
        <path d="M0 410q200-95 411 0t389-5q210-67 400 2v113H0Z" fill="#536b6d" opacity=".9" />
        <path d="M130 425 288 246l140 178M793 425l161-199 137 199" fill="none" stroke="#435d62" strokeWidth="26" strokeLinecap="round" />
        <g transform="translate(403 134)">
          <path d="M80 80q5-58 66-58t66 58" fill="#4e4053" />
          <circle cx="145" cy="86" r="45" fill="#efbc94" />
          <path d="M100 76q6-71 86-38 19 8 4 49-28-26-90-11Z" fill="#504156" />
          <path d="M97 139h98l39 210H58Z" fill="#59657c" />
          <path d="M113 156 40 301M177 156l73 137" stroke="#efbc94" strokeWidth="18" strokeLinecap="round" />
          <path d="M97 346 72 405M191 346l30 59" stroke="#4c5264" strokeWidth="20" strokeLinecap="round" />
          <g transform="translate(190 170) rotate(24)">
            <path d="M5 36C-38 4-26-37 11-5c37-32 49 9 7 41Z" fill="#9a5b56" />
            <circle cx="5" cy="35" r="18" fill="#9a5b56" /><circle cx="7" cy="35" r="7" fill="#f0c27d" />
            <path d="M4 19 12-104" stroke="#a66c57" strokeWidth="18" strokeLinecap="round" /><path d="M-4-98 22-98" stroke="#e8b37d" strokeWidth="27" strokeLinecap="round" />
            <path d="M-5-102 12 25M3-103l17 127M11-105l16 125" stroke="#f5d9ae" strokeWidth="1.5" />
          </g>
        </g>
        <g transform="translate(805 202)">
          <circle cx="63" cy="41" r="37" fill="#efbd98" /><path d="M26 41Q27-14 72 6q42 18 13 68-19-35-59-33Z" fill="#c66d73" />
          <path d="M29 85h67l32 193H2Z" fill="#d7857d" /><path d="M30 95 0 226M94 95l42 118" stroke="#efbd98" strokeWidth="17" strokeLinecap="round" /><path d="M41 276 20 335M86 276l22 59" stroke="#56626f" strokeWidth="20" strokeLinecap="round" />
        </g>
        <path d="M761 188q38-26 76 0M764 173q32-30 68 0" fill="none" stroke="#f4ce94" strokeWidth="3" strokeLinecap="round" opacity=".75" />
      </svg>
    );
  }

  if (scene === 'drive') {
    return (
      <svg className="illustration road-skyline" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <circle cx="980" cy="85" r="53" fill="#f7d39d" opacity=".76" />
        <path d="M0 251h77v-76h35v61h39v-100h50v101h39v-48h59v68h58v-111h48v84h43v-58h63v100h63v-93h47v70h51v-112h47v135h54v-66h62v80h60v-96h54v80h72v-46h40v97H0Z" fill="#759890" />
        <path d="M0 258h1200v42H0Z" fill="#526d6b" />
      </svg>
    );
  }

  if (scene === 'fish') {
    return (
      <svg className="illustration" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="880" cy="98" r="54" fill="#f7d39d" opacity=".82" />
        <path d="M0 180 180 80l149 76L510 45l180 116L900 60l300 108v110H0Z" fill="#5e827d" />
        <path d="M0 254h1200v246H0Z" fill="#4a7c79" />
        <path d="M0 320q180-30 360 0t400-4q240-35 440 4M0 387q180-28 360 0t400-4q240-35 440 4M0 451q180-28 360 0t400-4q240-35 440 4" fill="none" stroke="#90bbb0" strokeWidth="3" opacity=".42" />
      </svg>
    );
  }

  return (
    <svg className="illustration" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" aria-label="Поле над вечірнім містом">
      <circle cx="600" cy="145" r="120" fill="#f3be7f" opacity=".33" />
      <path d="M0 288q240-95 455 0t388-3q190-62 357 0v252H0Z" fill="#50617b" />
      <path d="M0 375q220-44 425 1t404-1q208-47 371 1v165H0Z" fill="#618676" />
      <path d="M0 466q224-27 423 1t405-2q211-29 372 1v74H0Z" fill="#4e7466" />
      <path d="M86 344v-43h24v43m28 0v-78h22v78m49 0v-56h19v56m75 0v-92h26v92m41 0v-50h16v50m75 0v-72h19v72m43 0v-46h18v46m72 0v-81h23v81m43 0v-55h18v55m62 0v-88h22v88m59 0v-50h16v50m69 0v-67h21v67" stroke="#57627c" strokeWidth="14" opacity=".85" />
      <path d="M0 407Q300 350 600 410t600-5" fill="none" stroke="#8faf8a" strokeWidth="5" opacity=".7" />
      <path d="M0 490q290-57 600 0t600-3" fill="none" stroke="#a6bd91" strokeWidth="3" opacity=".47" />
    </svg>
  );
}

function Header({ screen, onRestart }: { screen: Screen; onRestart: () => void }) {
  return (
    <header className="game-topbar">
      <div className="brand-mark" data-testid="text-brand">
        <span className="brand-seal"><HeartIcon /></span>
        <span>Міша &amp; Куля</span>
      </div>
      <div className="chapter-label" data-testid="text-chapter">маленька історія про великий початок</div>
      {screen !== 'cover' && screen !== 'ending' && (
        <button className="top-action" type="button" onClick={onRestart} data-testid="button-restart-top">
          <RestartIcon /> Почати спочатку
        </button>
      )}
    </header>
  );
}

function StoryScene({ step, onNext }: { step: number; onNext: () => void }) {
  const lines = [
    { speaker: 'Оповідач', text: 'Того вечора біля магазину «Сімі» було тихо й тепло. Куля сиділа поруч із подругами, а небо поволі ставало рожевим.' },
    { speaker: 'Куля', text: 'Дівчата, я давно хочу навчитися грати на гітарі. Уявляєте, як це — знати одну пісню до самого серця?' },
    { speaker: 'Міша', text: 'Можу показати, якщо хочеш. Я трохи граю.' },
    { speaker: 'Куля', text: 'Тоді покажеш? Мені справді цікаво. Я Куля.' },
    { speaker: 'Міша', text: 'Міша. Дуже приємно познайомитися, Куля.' },
  ];
  const line = lines[step];
  const last = step === lines.length - 1;
  return (
    <main className="story-screen">
      <div className="progress-row">
        <span className="progress-copy" data-testid="text-progress">Початок історії · {step + 1} / {lines.length}</span>
        <div className="progress-track" aria-label={`Прогрес історії ${step + 1} з ${lines.length}`}><span style={{ width: `${((step + 1) / lines.length) * 100}%` }} /></div>
      </div>
      <section className="scene-card" key={step} data-testid={`scene-opening-${step}`}>
        <div className="scene-art"><SceneBackdrop scene="store" /><span className="float-dot dot-one" /><span className="float-dot dot-two" /></div>
        <div className="dialogue-panel">
          <div className="speaker" data-testid="text-speaker">{line.speaker}</div>
          <p className="dialogue-text" data-testid="text-dialogue">{line.text}</p>
          <button className="next-button" type="button" onClick={onNext} data-testid="button-next-dialogue">
            {last ? 'До першої пісні' : 'Далі'} <ArrowIcon />
          </button>
          <div className="game-tip">натисни Enter або стрілку вправо</div>
        </div>
      </section>
    </main>
  );
}

function GuitarLevel({ round, score, feedback, progress, onInput, onRestart, onAdvance }: {
  round: number; score: number; feedback: string; progress: number; onInput: (key: string) => void; onRestart: () => void; onAdvance: () => void;
}) {
  const finished = round >= guitarSequence.length;
  return (
    <main className="mini-screen">
      <div className="level-intro">
        <div><div className="level-kicker">Рівень 01 · перша нота</div><h2>Міша бере гітару</h2></div>
        <p>Куля мріяла навчитися. Міша усміхнувся й зіграв для неї так, ніби знав цю мелодію завжди.</p>
      </div>
      <section className="mini-board">
        <div className="mini-status">
          <div><div className="status-label">Мелодія для Кулі</div><div className="status-value" data-testid="status-guitar-score">Влучань: {score}</div></div>
          <div className="feedback" data-testid="status-guitar-feedback">{finished ? 'Мелодія готова' : feedback}</div>
        </div>
        <div className="guitar-board">
          <div className="guitar-visual">
            <svg className="guitar-svg" viewBox="0 0 500 340" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path d="M274 225c-28-33-9-77 28-77 30 0 42 29 26 52 37 12 44 61 11 81-28 25-76 7-65-35Z" fill="#9a5b56" />
              <circle cx="291" cy="239" r="20" fill="#efc180" /><circle cx="291" cy="239" r="7" fill="#855955" />
              <path d="M302 205 345 64" stroke="#a96f59" strokeWidth="28" strokeLinecap="round" /><path d="M345 65 385 65" stroke="#e7b77e" strokeWidth="36" strokeLinecap="round" />
              <path d="M292 222 350 64M299 224 357 65M306 224 365 65M313 226 373 65" stroke="#f5dcb1" strokeWidth="2" />
              <path d="M178 246q60-57 120-8M198 259q57-50 108-1" fill="none" stroke="#f8d2a2" strokeWidth="3" strokeLinecap="round" opacity=".7" />
              <path d="M400 130q31-26 57 0M409 108q25-26 50 0" fill="none" stroke="#f8d2a2" strokeWidth="4" strokeLinecap="round" opacity=".8" />
            </svg>
            <div className="guitar-copy"><h3>Тихіше за вечір.</h3><p>Але достатньо голосно, щоб одна людина почула іншу.</p></div>
          </div>
          <div className="guitar-play">
            {finished ? (
              <>
                <div className="rhythm-copy"><strong>Вийшло чудово.</strong>Остання нота зависла в повітрі, а Куля вже знала: цей вечір хочеться запамʼятати.</div>
                <button className="primary-button" type="button" onClick={onAdvance} data-testid="button-guitar-continue">Їхати за молочним коктейлем <ArrowIcon /></button>
              </>
            ) : (
              <>
                <div className="rhythm-copy"><strong>Злови ритм</strong>Натисни клавішу <b>{guitarSequence[round]}</b>, коли нота опуститься. Можна також натискати кнопки.</div>
                <div className="beat-meter" aria-label="Прогрес ноти"><span style={{ width: `${progress}%` }} /></div>
                <div className="note-lanes">
                  {['A', 'S', 'D', 'F'].map((key) => <div className="note-lane" key={key}>{guitarSequence[round] === key && <div className="falling-note" />}</div>)}
                </div>
                <div className="note-lanes" style={{ height: 'auto' }}>
                  {['A', 'S', 'D', 'F'].map((key) => <button className="note-key" type="button" key={key} onClick={() => onInput(key)} data-testid={`button-note-${key}`}>{key}</button>)}
                </div>
                <div className="guitar-hint">клавіатура A · S · D · F</div>
              </>
            )}
          </div>
        </div>
        {finished && <div className="drive-footer"><p>Міша і Куля сідають в авто. Попереду — KFC та два молочні коктейлі.</p><button className="quiet-button" type="button" onClick={onRestart} data-testid="button-guitar-restart">Зіграти ще раз</button></div>}
      </section>
    </main>
  );
}

function DriveLevel({ lane, spill, time, won, failed, obstacles, onMove, onRetry, onAdvance }: {
  lane: number; spill: number; time: number; won: boolean; failed: boolean; obstacles: { id: string; lane: number; y: number }[]; onMove: (direction: number) => void; onRetry: () => void; onAdvance: () => void;
}) {
  return (
    <main className="mini-screen">
      <div className="level-intro">
        <div><div className="level-kicker">Рівень 02 · дорога до KFC</div><h2>Не розхлюпати ніжність</h2></div>
        <p>Куля тримає два молочні коктейлі. Кермуй обережно: ями сьогодні особливо підступні.</p>
      </div>
      <section className="mini-board">
        <div className="mini-status">
          <div><div className="status-label">Поїздка до KFC</div><div className="status-value" data-testid="status-drive-time">{won ? 'Приїхали' : `${Math.min(100, Math.round((time / 150) * 100))}% шляху`}</div></div>
          <div className="feedback" data-testid="status-spill">Розлито: {spill}%</div>
        </div>
        <div className="drive-board">
          <div className="road-scene">
            <SceneBackdrop scene="drive" />
            <div className="spill-meter"><span>Молочний коктейль</span><div className="spill-meter-track"><span style={{ width: `${spill}%` }} /></div></div>
            <div className="milkshake" aria-hidden="true" />
            <div className="road-surface" /><div className="road-line" />
            {obstacles.map((obstacle) => <div className="drive-obstacle" key={obstacle.id} style={{ left: `${[28, 50, 72][obstacle.lane]}%`, top: `${obstacle.y}%` }} />)}
            <div className="drive-car" style={{ left: `${[28, 50, 72][lane]}%` }}><div className="drive-car-top"><div className="drive-window" /></div><div className="drive-car-body" /><div className="drive-wheel" /><div className="drive-wheel" /></div>
            <div className="drive-controls">
              <button className="control-button" type="button" onClick={() => onMove(-1)} aria-label="Кермо ліворуч" data-testid="button-drive-left"><ChevronIcon direction="left" /></button>
              <button className="control-button" type="button" onClick={() => onMove(1)} aria-label="Кермо праворуч" data-testid="button-drive-right"><ChevronIcon direction="right" /></button>
            </div>
          </div>
          <div className="drive-footer">
            {failed ? <><p>Ой, трохи пролилося. Спробуй ще раз — тепер ти знаєш дорогу.</p><button className="primary-button" type="button" onClick={onRetry} data-testid="button-drive-retry">Спробувати ще раз</button></> : won ? <><p>Жодна крапля не загубилася. Можна замовляти два коктейлі.</p><button className="primary-button" type="button" onClick={onAdvance} data-testid="button-drive-continue">До риболовлі <ArrowIcon /></button></> : <p>Стрілки або A / D · ухиляйся від ям</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

function FishLevel({ hook, fishCaught, joystick, pondRef, onMove, onPointerMove, onPointerUp, onAdvance }: {
  hook: { x: number; y: number }; fishCaught: boolean; joystick: { x: number; y: number }; pondRef: React.RefObject<HTMLDivElement | null>; onMove: (dx: number, dy: number) => void; onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void; onPointerUp: () => void; onAdvance: () => void;
}) {
  return (
    <main className="mini-screen">
      <div className="level-intro">
        <div><div className="level-kicker">Рівень 03 · побачення біля води</div><h2>Тримай вудку міцніше</h2></div>
        <p>Місто залишилося далеко. Тут тільки вода, тиха розмова і маленька риба, яка перевіряє вашу команду.</p>
      </div>
      <section className="mini-board">
        <div className="mini-status">
          <div><div className="status-label">Риболовля удвох</div><div className="status-value" data-testid="status-fishing">{fishCaught ? 'Улов є' : 'Знайди рибу'}</div></div>
          <div className="feedback">{fishCaught ? 'Куля сміється: спіймали!' : 'Рухай поплавок до риби'}</div>
        </div>
        <div className="fish-board">
          <div className="pond-scene" ref={pondRef} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
            <SceneBackdrop scene="fish" />
            <div className="pond-copy"><h3>Озеро памʼятає.</h3><p>Маленький рух — і вечір стає спільним.</p></div>
            {!fishCaught && <><div className="fish-catch-ring" style={{ left: '70%', top: '57%' }} /><div className="fish" style={{ left: '70%', top: '57%' }}><div className="fish-body" /><div className="fish-tail" /><div className="fish-eye" /></div></>}
            <div className="hook" style={{ left: `${hook.x}%`, top: `${hook.y}%` }} />
            <div className="joystick" onPointerMove={onPointerMove} onPointerDown={onPointerMove} aria-label="Джойстик для поплавка" data-testid="control-fishing-joystick"><div className="joystick-knob" style={{ transform: `translate(${joystick.x}px, ${joystick.y}px)` }} /></div>
            <div className="fish-controls">
              <button className="control-button up" type="button" onClick={() => onMove(0, -4)} aria-label="Рух вгору" data-testid="button-fish-up"><ChevronIcon direction="up" /></button>
              <button className="control-button left" type="button" onClick={() => onMove(-4, 0)} aria-label="Рух ліворуч" data-testid="button-fish-left"><ChevronIcon direction="left" /></button>
              <button className="control-button down" type="button" onClick={() => onMove(0, 4)} aria-label="Рух вниз" data-testid="button-fish-down"><ChevronIcon direction="down" /></button>
              <button className="control-button right" type="button" onClick={() => onMove(4, 0)} aria-label="Рух праворуч" data-testid="button-fish-right"><ChevronIcon direction="right" /></button>
            </div>
          </div>
          <div className="fish-footer">{fishCaught ? <><span>Риба клюнула — і ви обоє радієте, наче давно знайомі.</span><button className="primary-button" type="button" onClick={onAdvance} data-testid="button-fishing-continue">Остання сцена <ArrowIcon /></button></> : <span>Стрілки · WASD · або потягни джойстик</span>}</div>
        </div>
      </section>
    </main>
  );
}

function Proposal({ onYes, onMaybe }: { onYes: () => void; onMaybe: () => void }) {
  return (
    <main className="mini-screen">
      <div className="level-intro">
        <div><div className="level-kicker">Рівень 04 · питання</div><h2>Між містом і небом</h2></div>
        <p>Далекі вогні мерехтять унизу. Але Міша дивиться тільки на Кулю.</p>
      </div>
      <section className="mini-board proposal-board">
        <div className="proposal-scene">
          <SceneBackdrop scene="proposal" />
          <div className="city-glow" /><div className="city-line" /><div className="field-lines" />
          <div className="proposal-copy"><h3>Куля, будеш<br />зі мною?</h3><p>Міша питає тихо. Так, щоб відповідь належала тільки вам двом.</p></div>
          <div className="proposal-person left"><div className="hair" /><div className="head" /><div className="body" /><div className="arm" /></div>
          <div className="proposal-person right"><div className="hair" /><div className="head" /><div className="body" /><div className="arm" /></div>
          <div className="proposal-actions"><button className="choice-button primary" type="button" onClick={onYes} data-testid="button-proposal-yes">Так, буду</button><button className="choice-button" type="button" onClick={onMaybe} data-testid="button-proposal-maybe">Дай подумати</button></div>
        </div>
      </section>
    </main>
  );
}

function Ending({ onRestart }: { onRestart: () => void }) {
  return (
    <main className="ending-screen">
      <section className="ending-card" data-testid="screen-ending">
        <div className="heart-field" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span className="heart" key={index} />)}</div>
        <div>
          <div className="eyebrow" style={{ color: '#f7ce8c', justifyContent: 'center' }}>кінець першої сторінки</div>
          <h1>Я безмежно<br /><em>тебе кохаю</em></h1>
          <p><strong>Міша любить Кулю безкінечно.</strong><br />Від магазину «Сімі» — до всіх наступних вечорів, які тільки чекають на вас.</p>
          <div className="credits">історія, яку хочеться перечитувати</div>
          <button className="primary-button restart-button" type="button" onClick={onRestart} data-testid="button-replay-ending"><RestartIcon /> Перечитати з початку</button>
        </div>
      </section>
    </main>
  );
}

function GentleChoice({ onReturn, onRestart }: { onReturn: () => void; onRestart: () => void }) {
  return (
    <main className="ending-screen">
      <section className="gentle-card" data-testid="screen-gentle-choice">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>ще одна сторінка</div>
        <h2>Можна не поспішати.</h2>
        <p>Міша усміхнувся й сказав: «Добре. Я почекаю». Важливі речі мають свій час, а ваша історія — ще багато сторінок.</p>
        <div className="gentle-actions"><button className="primary-button" type="button" onClick={onReturn} data-testid="button-return-proposal">Повернутися до питання <ArrowIcon /></button><button className="quiet-button" type="button" onClick={onRestart} data-testid="button-restart-gentle"><RestartIcon /> Почати спочатку</button></div>
      </section>
    </main>
  );
}

function App() {
  const [screen, setScreen] = useState<Screen>('cover');
  const [openingStep, setOpeningStep] = useState(0);
  const [guitarRound, setGuitarRound] = useState(0);
  const [guitarScore, setGuitarScore] = useState(0);
  const [guitarFeedback, setGuitarFeedback] = useState('Готовий?');
  const [guitarProgress, setGuitarProgress] = useState(0);
  const [guitarLocked, setGuitarLocked] = useState(false);
  const guitarLockedRef = useRef(false);
  const guitarTimeout = useRef<number | null>(null);
  const [driveLane, setDriveLane] = useState(1);
  const [driveSpill, setDriveSpill] = useState(0);
  const [driveTime, setDriveTime] = useState(0);
  const [driveWon, setDriveWon] = useState(false);
  const [driveFailed, setDriveFailed] = useState(false);
  const [driveObstacles, setDriveObstacles] = useState([{ id: 'one', lane: 1, y: 13 }, { id: 'two', lane: 0, y: 38 }, { id: 'three', lane: 2, y: 59 }]);
  const [hook, setHook] = useState({ x: 20, y: 62 });
  const [fishCaught, setFishCaught] = useState(false);
  const [joystick, setJoystick] = useState({ x: 0, y: 0 });
  const pondRef = useRef<HTMLDivElement | null>(null);

  const resetGame = () => {
    if (guitarTimeout.current) window.clearTimeout(guitarTimeout.current);
    setScreen('cover'); setOpeningStep(0); setGuitarRound(0); setGuitarScore(0); setGuitarFeedback('Готовий?'); setGuitarProgress(0); setGuitarLocked(false); guitarLockedRef.current = false;
    setDriveLane(1); setDriveSpill(0); setDriveTime(0); setDriveWon(false); setDriveFailed(false); setDriveObstacles([{ id: 'one', lane: 1, y: 13 }, { id: 'two', lane: 0, y: 38 }, { id: 'three', lane: 2, y: 59 }]);
    setHook({ x: 20, y: 62 }); setFishCaught(false); setJoystick({ x: 0, y: 0 });
  };

  const nextOpening = () => {
    if (openingStep < 4) setOpeningStep((current) => current + 1);
    else {
      setGuitarRound(0); setGuitarScore(0); setGuitarFeedback('Готовий?'); setScreen('guitar');
    }
  };

  const finishGuitarRound = (success: boolean) => {
    if (guitarLockedRef.current) return;
    guitarLockedRef.current = true; setGuitarLocked(true); setGuitarFeedback(success ? 'Чудово, ще раз!' : 'Трішки повз, але ритм триває');
    if (success) setGuitarScore((current) => current + 1);
    guitarTimeout.current = window.setTimeout(() => {
      if (guitarRound >= guitarSequence.length - 1) setGuitarRound(guitarSequence.length);
      else setGuitarRound((current) => current + 1);
    }, 520);
  };

  const guitarInput = (input: string) => {
    if (screen !== 'guitar' || guitarLocked || guitarRound >= guitarSequence.length) return;
    const expected = guitarSequence[guitarRound];
    if (input === expected) finishGuitarRound(true);
    else setGuitarFeedback(`Спробуй клавішу ${expected}`);
  };

  useEffect(() => {
    if (screen !== 'guitar' || guitarRound >= guitarSequence.length) return;
    guitarLockedRef.current = false; setGuitarLocked(false); setGuitarProgress(0);
    const progressTimer = window.setInterval(() => setGuitarProgress((current) => Math.min(100, current + 7)), 100);
    const missTimer = window.setTimeout(() => finishGuitarRound(false), 1500);
    return () => { window.clearInterval(progressTimer); window.clearTimeout(missTimer); if (guitarTimeout.current) window.clearTimeout(guitarTimeout.current); };
  }, [screen, guitarRound]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (screen === 'story' && (event.key === 'Enter' || event.key === 'ArrowRight')) nextOpening();
      if (screen === 'guitar' && ['a', 's', 'd', 'f'].includes(event.key.toLowerCase())) guitarInput(event.key.toUpperCase());
      if (screen === 'drive' && ['ArrowLeft', 'a', 'A', 'ArrowRight', 'd', 'D'].includes(event.key)) { event.preventDefault(); onDriveMove(event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a' ? -1 : 1); }
      if (screen === 'fish') {
        const directions: Record<string, [number, number]> = { ArrowUp: [0, -4], w: [0, -4], W: [0, -4], ArrowDown: [0, 4], s: [0, 4], S: [0, 4], ArrowLeft: [-4, 0], a: [-4, 0], A: [-4, 0], ArrowRight: [4, 0], d: [4, 0], D: [4, 0] };
        if (directions[event.key]) { event.preventDefault(); onFishMove(...directions[event.key]); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    if (screen !== 'drive' || driveWon || driveFailed) return;
    const timer = window.setInterval(() => {
      setDriveTime((current) => {
        const next = current + 1;
        if (next >= 150 && driveSpill < 100) setDriveWon(true);
        return next;
      });
      setDriveObstacles((current) => {
        let didHit = false;
        const moved = current.map((obstacle) => {
          const y = obstacle.y + 1.5;
          if (!didHit && obstacle.lane === driveLane && y > 77 && y < 88) { didHit = true; }
          return { ...obstacle, y };
        }).filter((obstacle) => obstacle.y < 104);
        if (didHit) setDriveSpill((currentSpill) => { const next = Math.min(100, currentSpill + 14); if (next >= 100) setDriveFailed(true); return next; });
        return moved;
      });
    }, 100);
    return () => window.clearInterval(timer);
  }, [screen, driveLane, driveWon, driveFailed, driveSpill]);

  const onDriveMove = (direction: number) => setDriveLane((current) => Math.max(0, Math.min(2, current + direction)));
  const onDriveRetry = () => { setDriveLane(1); setDriveSpill(0); setDriveTime(0); setDriveWon(false); setDriveFailed(false); setDriveObstacles([{ id: 'one', lane: 1, y: 13 }, { id: 'two', lane: 0, y: 38 }, { id: 'three', lane: 2, y: 59 }]); };
  const onFishMove = (dx: number, dy: number) => {
    setHook((current) => {
      const next = { x: Math.max(8, Math.min(92, current.x + dx)), y: Math.max(30, Math.min(80, current.y + dy)) };
      if (Math.hypot(next.x - 70, next.y - 57) < 10) setFishCaught(true);
      return next;
    });
  };
  const onPondPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget === pondRef.current && event.buttons !== 1) return;
    const rect = pondRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (event.currentTarget.classList.contains('joystick')) {
      const centerX = rect.left + 75; const centerY = rect.top + rect.height - 75;
      const dx = Math.max(-34, Math.min(34, event.clientX - centerX)); const dy = Math.max(-34, Math.min(34, event.clientY - centerY));
      setJoystick({ x: dx, y: dy }); onFishMove(dx / 7, dy / 7);
    } else {
      onFishMove(((event.clientX - rect.left) / rect.width * 100 - hook.x) * .25, ((event.clientY - rect.top) / rect.height * 100 - hook.y) * .25);
    }
  };
  const onJoystickUp = () => setJoystick({ x: 0, y: 0 });

  const beginStory = () => { setOpeningStep(0); setScreen('story'); };
  const screenContent = screen === 'cover' ? (
    <main className="cover-screen">
      <div className="cover-copy">
        <div className="eyebrow">особлива сторінка · 01</div>
        <h1>Міша<br /><em>і Куля</em></h1>
        <p>Одна зустріч біля магазину «Сімі». Одна гітара. І ціле життя, яке почалося з простого «привіт».</p>
        <div className="cover-meta"><button className="primary-button" type="button" onClick={beginStory} data-testid="button-start-story">Відкрити історію <ArrowIcon /></button><span className="cover-note">коротка гра про двох і один теплий вечір</span></div>
      </div>
      <div className="cover-art"><SceneBackdrop scene="cover" /><span className="float-dot dot-one" /><span className="float-dot dot-two" /><span className="float-dot dot-three" /><div className="art-caption">Там, де все почалося.<small>магазин «Сімі» · один вечір</small></div></div>
    </main>
  ) : screen === 'story' ? <StoryScene step={openingStep} onNext={nextOpening} /> :
    screen === 'guitar' ? <GuitarLevel round={guitarRound} score={guitarScore} feedback={guitarFeedback} progress={guitarProgress} onInput={guitarInput} onRestart={resetGame} onAdvance={() => { setDriveTime(0); setDriveSpill(0); setDriveWon(false); setDriveFailed(false); setScreen('drive'); }} /> :
    screen === 'drive' ? <DriveLevel lane={driveLane} spill={driveSpill} time={driveTime} won={driveWon} failed={driveFailed} obstacles={driveObstacles} onMove={onDriveMove} onRetry={onDriveRetry} onAdvance={() => { setHook({ x: 20, y: 62 }); setFishCaught(false); setScreen('fish'); }} /> :
    screen === 'fish' ? <FishLevel hook={hook} fishCaught={fishCaught} joystick={joystick} pondRef={pondRef} onMove={onFishMove} onPointerMove={onPondPointerMove} onPointerUp={onJoystickUp} onAdvance={() => setScreen('proposal')} /> :
    screen === 'proposal' ? <Proposal onYes={() => setScreen('ending')} onMaybe={() => setScreen('gentle')} /> :
    screen === 'ending' ? <Ending onRestart={resetGame} /> : <GentleChoice onReturn={() => setScreen('proposal')} onRestart={resetGame} />;

  return <div className="game-shell"><Header screen={screen} onRestart={resetGame} />{screenContent}</div>;
}

export default App;