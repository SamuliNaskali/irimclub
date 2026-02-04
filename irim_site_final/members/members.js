
// Client-side passphrase gate (for convenience only; not for sensitive data)
const HASH = 'b0ab0c6b7c0f1a1c1e148a0f8e37928b1a8ce1f8f0b57e9e3c9a5f0a3b9a1b6e'; // placeholder
async function sha256(s){
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(s));
  return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
}

document.getElementById('gate').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const pw = document.getElementById('pw').value;
  const h = await sha256(pw);
  if(h===HASH){
    sessionStorage.setItem('irim:member','1');
    window.location.href = 'room.html';
  } else {
    alert('Incorrect passphrase');
  }
});
