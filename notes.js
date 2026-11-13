// Problem → solution note on every project card (shared by /agents and /web3).
// Hover devices: overlay on the thumbnail. Touch devices: short note under the description.
(function () {
  const N = {
    RegReady: ['NAFDAC and export rules are scattered across PDFs and offices.', 'A tailored checklist in under a minute, with the official source for each step.'],
    Zareb: ['Food exports get rejected at EU and UK borders over paperwork gaps.', 'Checks your documents against the rules and tells you exactly what to fix.'],
    Sabe: ['Finding and comparing reliable food suppliers takes weeks of calls.', 'Searches and compares suppliers for you in minutes.'],
    Panto: ['Food-tech buyers and suppliers struggle to find each other.', 'Matches buyers with the right suppliers and starts the conversation.'],
    Sousy: ['Kitchen stock counts are slow, and hands are always busy or messy.', 'Say your counts out loud and the inventory updates itself.'],
    Bingine: ['Good food gets forgotten and thrown away.', 'An offline tracker that warns you before food goes bad, no internet needed.'],
    Zamu: ['Farmers lose crops because plant diseases are hard to identify.', 'Snap a photo, get a diagnosis, treatment and care advice.'],
    FarmLinq: ['Produce spoils while it waits for pickup and transport.', 'Plans farm-to-market pickups so less food goes to waste.'],
    Paiye: ['Job hunting means endless searching and resumes that ATS filters reject.', 'Finds remote jobs, checks your resume and preps you for interviews, right in Telegram.'],
    Lynx: ['Most product ideas are guesses, not real problems.', 'Researches real problems and turns them into grounded, buildable ideas.'],
    Grantini: ['Finding grants that fit your project takes days of research.', 'Paste a link or description, get matching grants and an application plan.'],
    Kapitali: ['Investors drown in deal notes and scattered market data.', 'A copilot that searches your notes and data and answers in seconds.'],
    Negotia8: ['Most people never practise negotiating before it really matters.', 'Rehearse with a 3D avatar that reacts to your voice and gives feedback.'],
    Logos: ['Vague prompts get vague AI results.', 'Turns a rough idea into a clear, product-ready prompt.'],
    S4F3: ['Saved links get lost across apps and platforms.', 'Save from anywhere and AI organises it so you can find it again.'],
    Hackathonia: ['Good hackathons are scattered across dozens of sites.', 'One list refreshed monthly, filtered by format, location, topic and chain.'],
    VERIDD: ['There is no way to know if an AI agent can be trusted.', 'An on-chain reputation score and action log for every agent, on 0G.'],
    Floe: ['Paying an AI agent for work means trusting it blindly.', 'Escrow on Sui that pays out only when the work is verified, with disputes built in.'],
    Gaid3: ['Web3 feels risky and confusing for newcomers.', 'A patient guide with wallet safety checks and step-by-step help, on Sui.'],
    Talass: ['Crypto holdings are scattered across wallets and chains.', 'One dashboard for every asset and NFT, across chains.'],
    Droplet: ['Sending crypto means copying long, scary wallet addresses.', 'Send on Sui to a username, email or phone number instead.'],
    Conduit: ['Event tickets get scalped and faked.', 'NFT tickets on Sui with anti-scalping built in.'],
    Alithea: ['Brain-training apps are easy to quit.', 'A memory training arena on Sui that turns practice into a game.'],
    Quizfinity: ['Learning Web3 feels dry and is easy to drop.', 'Gamified quizzes on the Internet Computer that reward you as you learn.'],
    Ludic: ['On-chain games are often slow and complicated.', 'A simple multi-game arcade on Solana, starting with on-chain tic-tac-toe.'],
  };
  const css = `
.shot-link,.card>.shot{position:relative;display:block}
.pnote{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:8px;padding:16px 18px;background:rgba(14,22,18,.9);color:#f3f6f3;font-size:13px;line-height:1.45;opacity:0;transition:opacity .2s ease;pointer-events:none}
.pnote b{display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#8fdcb1;margin-bottom:2px}
.card:hover .pnote,.card:focus-within .pnote{opacity:1}
.pnote-inline{display:none;font-size:13px;line-height:1.45;margin:2px 0 4px;color:var(--muted)}
.pnote-inline b{color:var(--ink);font-weight:600}
@media (hover:none){.pnote{display:none}.pnote-inline{display:block}}
@media (prefers-reduced-motion:reduce){.pnote{transition:none}}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  document.querySelectorAll('.card').forEach((c) => {
    const name = c.querySelector('h3')?.textContent.trim(); const n = N[name]; if (!n) return;
    const holder = c.querySelector('.shot-link') || c.querySelector('.shot');
    if (holder) {
      const o = document.createElement('div'); o.className = 'pnote'; o.setAttribute('aria-hidden', 'true');
      o.innerHTML = `<div><b>Problem</b>${n[0]}</div><div><b>Solution</b>${n[1]}</div>`;
      if (holder.tagName === 'IMG') { const w = document.createElement('div'); w.style.position = 'relative'; holder.replaceWith(w); w.append(holder, o); } else holder.append(o);
    }
    const p = c.querySelector('p');
    const inl = document.createElement('p'); inl.className = 'pnote-inline';
    inl.innerHTML = `<b>Problem:</b> ${n[0]} <b>Solution:</b> ${n[1]}`;
    p?.after(inl);
  });
})();
