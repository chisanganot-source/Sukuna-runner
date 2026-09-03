#!/usr/bin/env node
const { execSync, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const config = {"BOT_NAME":"Ai Hoshino","PREFIX":".","OWNER_NUMBER":"260762478998","PAIR_NUMBER":"260762478998","WORK_MODE":"public","MENU_DESIGN":"void","SESSION_ID":"Pasqua~pJH78I","PAIR_SITE_URL":"https://pair-site-wmte.onrender.com"};
const REPO = 'https://github.com/pasquawisdom2007-beep/SUKUNA_MD.git';
const rootDir = path.join(process.cwd(), '.sukuna-md-runtime');

try {
  console.log('[SUKUNA] Downloading SUKUNA MD...');
  const runtime
