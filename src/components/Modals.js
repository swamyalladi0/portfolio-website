import { portfolioData } from '../data/portfolioData.js?v=2.1';

export function renderModals() {
  const { personal, education } = portfolioData;

  return `
    <!-- 1. Playable Python Guessing Game Modal -->
    <div class="modal-overlay" id="modal-project-1" role="dialog" aria-modal="true" aria-labelledby="modal-p1-title">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title" id="modal-p1-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span>CLI TERMINAL // Number Guessing Game (Python 3.12)</span>
          </div>
          <button class="modal-close-btn" data-close="modal-project-1" aria-label="Close terminal">&times;</button>
        </div>
        
        <div class="modal-body">
          <div class="terminal-window">
            <div class="terminal-history" id="p1-terminal-history">
              <div class="terminal-line line-system">=== QUANTUM NUMBER GUESSER // PYTHON CORE ===</div>
              <div class="terminal-line line-system">Initializing pseudorandom seed... Target acquired in range [1, 100].</div>
              <div class="terminal-line line-system">Maximum allowed trials: 7. Enter your initial guess below.</div>
            </div>

            <form class="terminal-input-bar" id="p1-terminal-form">
              <span class="terminal-prompt">user@cse-2026:~$</span>
              <input 
                type="number" 
                id="p1-guess-input" 
                class="terminal-input" 
                placeholder="Enter guess (1-100)..." 
                min="1" 
                max="100" 
                autocomplete="off" 
                required 
              />
              <button type="submit" class="btn btn-outline" style="padding: 4px 12px; font-size: 0.75rem;">Guess</button>
              <button type="button" class="btn btn-secondary" id="p1-reset-btn" style="padding: 4px 10px; font-size: 0.75rem;">Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Interactive SQL Healthcare Database Modal -->
    <div class="modal-overlay" id="modal-project-2" role="dialog" aria-modal="true" aria-labelledby="modal-p2-title">
      <div class="modal-dialog" style="max-width: 840px;">
        <div class="modal-header">
          <div class="modal-title" id="modal-p2-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            <span>RELATIONAL WORKBENCH // Hospital DBMS & SQL Queries</span>
          </div>
          <button class="modal-close-btn" data-close="modal-project-2" aria-label="Close query explorer">&times;</button>
        </div>

        <div class="modal-body">
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">
            Select a sample analytical query to inspect relational joins and view simulated SQL execution:
          </p>

          <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
            <button class="btn btn-secondary active-query-btn" id="query-btn-1" style="font-size: 0.76rem; padding: 6px 12px;">Query 1: Doctor Schedules & Rooms</button>
            <button class="btn btn-secondary" id="query-btn-2" style="font-size: 0.76rem; padding: 6px 12px;">Query 2: Bed Occupancy Rates</button>
            <button class="btn btn-secondary" id="query-btn-3" style="font-size: 0.76rem; padding: 6px 12px;">Query 3: Patient Labs & Meds</button>
          </div>

          <div class="glass-panel" style="padding: 16px; margin-bottom: 16px; background: #080a11; font-family: var(--font-mono); font-size: 0.78rem;">
            <div style="color: var(--accent-blue); margin-bottom: 6px; font-weight: 700;">// SQL CODE:</div>
            <pre id="sql-display-code" style="white-space: pre-wrap; color: var(--text-secondary);"></pre>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-emerald); margin-bottom: 8px;">
            <span>● QUERY EXECUTION RESULT (3 ROWS RETURNED IN 4.2ms)</span>
          </div>

          <div style="overflow-x: auto; border: 1px solid var(--border-subtle); border-radius: 8px;">
            <table id="sql-results-table" style="width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 0.78rem;">
              <thead id="sql-table-head" style="background: rgba(255, 255, 255, 0.05); color: var(--accent-blue);"></thead>
              <tbody id="sql-table-body"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Resume Preview Modal -->
    <div class="modal-overlay" id="modal-resume-preview" role="dialog" aria-modal="true" aria-labelledby="modal-resume-title">
      <div class="modal-dialog" style="max-width: 780px;">
        <div class="modal-header">
          <div class="modal-title" id="modal-resume-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span>RESUME PREVIEW // ${escapeHtml(personal.name)}</span>
          </div>
          <button class="modal-close-btn" data-close="modal-resume-preview" aria-label="Close resume preview">&times;</button>
        </div>

        <div class="modal-body" style="background: #06080e;">
          <!-- Stylized High-Tech Resume Sheet -->
          <div style="padding: 28px; background: rgba(14, 18, 29, 0.9); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; font-family: var(--font-body);">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px; margin-bottom: 20px;">
              <div>
                <h3 style="font-size: 1.6rem; color: #ffffff; margin-bottom: 4px;">${escapeHtml(personal.name)}</h3>
                <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-blue);">${escapeHtml(personal.role)}</p>
              </div>
              <div style="text-align: right; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim);">
                <div>${escapeHtml(personal.email)}</div>
                <div>${escapeHtml(personal.location)}</div>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h4 style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 8px;">Education</h4>
              <p style="font-size: 0.95rem; font-weight: 600; color: #ffffff;">${escapeHtml(education.degree)} - ${escapeHtml(education.major)}</p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${escapeHtml(education.institution)} • Batch ${escapeHtml(education.year)} (CGPA: ${escapeHtml(education.cgpa)})</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h4 style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 8px;">Core Technical Competencies</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                <strong>Languages:</strong> Python, Java, SQL, JavaScript, HTML, CSS<br>
                <strong>Concepts:</strong> Object-Oriented Programming (OOP), Relational DBMS, Data Structures & Algorithms<br>
                <strong>Tools:</strong> Git, GitHub
              </p>
            </div>

            <div>
              <h4 style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 8px;">Verified Projects</h4>
              <p style="font-size: 0.88rem; color: #ffffff; font-weight: 600;">1. Number Guessing Game (Python)</p>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 10px;">Interactive terminal logic, state tracking, and user validation.</p>
              <p style="font-size: 0.88rem; color: #ffffff; font-weight: 600;">2. Healthcare SQL Database System</p>
              <p style="font-size: 0.82rem; color: var(--text-muted);">Relational schema modeling, multi-table joins, and hospital ward metrics.</p>
            </div>

            <div style="margin-top: 24px; padding-top: 14px; border-top: 1px dashed rgba(255, 255, 255, 0.1); display: flex; justify-content: space-between; align-items: center;">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim);">FILE: src/assets/resume.pdf</span>
              <a href="${escapeHtml(personal.resumeUrl)}" download="resume.pdf" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8rem;">Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initModalsInteractions() {
  const openButtons = document.querySelectorAll('.open-demo-btn, #open-resume-modal-btn');
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  const overlays = document.querySelectorAll('.modal-overlay');

  // Open modal handlers
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      if (projectId) {
        const targetModal = document.getElementById(`modal-${projectId}`);
        targetModal?.classList.add('open');
      } else if (btn.id === 'open-resume-modal-btn') {
        document.getElementById('modal-resume-preview')?.classList.add('open');
      }
    });
  });

  // Close buttons
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      if (modalId) {
        document.getElementById(modalId)?.classList.remove('open');
      }
    });
  });

  // Close when clicking overlay backdrop
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(o => o.classList.remove('open'));
    }
  });

  // ----------------------------------------------------
  // Interactive Python Terminal Game Logic
  // ----------------------------------------------------
  let targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const maxAttempts = 7;
  const history = document.getElementById('p1-terminal-history');
  const form = document.getElementById('p1-terminal-form');
  const input = document.getElementById('p1-guess-input');
  const resetBtn = document.getElementById('p1-reset-btn');

  const addLine = (text, className) => {
    if (!history) return;
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    history.appendChild(line);
    history.scrollTop = history.scrollHeight;
  };

  const resetGame = () => {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    if (history) {
      history.innerHTML = `
        <div class="terminal-line line-system">=== QUANTUM NUMBER GUESSER // PYTHON CORE ===</div>
        <div class="terminal-line line-system">New game initialized! Target acquired in range [1, 100].</div>
        <div class="terminal-line line-system">Maximum trials: 7. Enter your guess below.</div>
      `;
    }
    if (input) {
      input.value = '';
      input.disabled = false;
      input.focus();
    }
  };

  resetBtn?.addEventListener('click', resetGame);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input || input.disabled) return;
    const val = parseInt(input.value, 10);
    if (isNaN(val) || val < 1 || val > 100) {
      addLine(`[INPUT ERROR] Please enter an integer between 1 and 100.`, 'line-hint-high');
      return;
    }

    attempts++;
    addLine(`user@cse-2026:~$ guess = ${val}  (Attempt ${attempts}/${maxAttempts})`, 'line-user');

    if (val === targetNumber) {
      addLine(`>>> [SUCCESS] 🎯 Correct! You cracked the secret number ${targetNumber} in ${attempts} attempt(s)!`, 'line-win');
      input.disabled = true;
    } else if (attempts >= maxAttempts) {
      addLine(`>>> [FAILED] ❌ Max attempts reached. The secret number was ${targetNumber}. Click Reset to try again.`, 'line-fail');
      input.disabled = true;
    } else if (val < targetNumber) {
      addLine(`>>> [HINT] Target is HIGHER than ${val}. (${maxAttempts - attempts} attempts remaining)`, 'line-hint-low');
    } else {
      addLine(`>>> [HINT] Target is LOWER than ${val}. (${maxAttempts - attempts} attempts remaining)`, 'line-hint-high');
    }

    input.value = '';
    input.focus();
  });

  // ----------------------------------------------------
  // Interactive SQL Explorer Logic
  // ----------------------------------------------------
  const queryDisplay = document.getElementById('sql-display-code');
  const tableHead = document.getElementById('sql-table-head');
  const tableBody = document.getElementById('sql-table-body');
  const qBtn1 = document.getElementById('query-btn-1');
  const qBtn2 = document.getElementById('query-btn-2');
  const qBtn3 = document.getElementById('query-btn-3');

  const queries = {
    1: {
      sql: `SELECT a.appointment_id, p.patient_name, d.doctor_name, d.specialization, r.room_number, a.status
FROM appointments a
JOIN patients p ON a.patient_id = p.patient_id
JOIN doctors d ON a.doctor_id = d.doctor_id
LEFT JOIN rooms r ON a.assigned_room_id = r.room_id
WHERE a.status = 'CONFIRMED'
ORDER BY a.scheduled_time ASC;`,
      headers: ["appointment_id", "patient_name", "doctor_name", "specialization", "room_number", "status"],
      rows: [
        ["APT-1082", "Sarah Jenkins", "Dr. A. Vance", "Cardiology", "Room 402", "CONFIRMED"],
        ["APT-1085", "Marcus Reed", "Dr. E. Thorne", "Neurology", "Room 214", "CONFIRMED"],
        ["APT-1091", "Clara Oswald", "Dr. H. Chen", "Orthopedics", "Room 305", "CONFIRMED"]
      ]
    },
    2: {
      sql: `SELECT h.hospital_name, r.room_type, COUNT(r.room_id) AS total_rooms,
       SUM(CASE WHEN r.is_occupied = 1 THEN 1 ELSE 0 END) AS occupied_rooms,
       ROUND((SUM(CASE WHEN r.is_occupied = 1 THEN 1.0 ELSE 0.0 END) / COUNT(r.room_id)) * 100, 2) AS occupancy_rate
FROM hospitals h
JOIN rooms r ON h.hospital_id = r.hospital_id
GROUP BY h.hospital_name, r.room_type
ORDER BY occupancy_rate DESC;`,
      headers: ["hospital_name", "room_type", "total_rooms", "occupied_rooms", "occupancy_rate (%)"],
      rows: [
        ["Metro General", "ICU Suite", "20", "18", "90.00%"],
        ["Apex Health Care", "Private Ward", "45", "36", "80.00%"],
        ["City Care Hospital", "General Ward", "100", "72", "72.00%"]
      ]
    },
    3: {
      sql: `SELECT p.patient_id, p.patient_name, l.test_name, l.test_status, m.medicine_name, m.dosage
FROM patients p
JOIN lab_reports l ON p.patient_id = l.patient_id
JOIN prescriptions m ON p.patient_id = m.patient_id
WHERE l.test_status = 'COMPLETED';`,
      headers: ["patient_id", "patient_name", "test_name", "test_status", "medicine_name", "dosage"],
      rows: [
        ["PAT-004", "David Miller", "Complete Blood Count", "COMPLETED", "Amoxicillin", "500mg"],
        ["PAT-012", "Elena Rostova", "MRI Cranial Scan", "COMPLETED", "Atorvastatin", "20mg"],
        ["PAT-019", "James Wilson", "Lipid Profile Panel", "COMPLETED", "Metformin", "850mg"]
      ]
    }
  };

  const loadQuery = (num) => {
    const q = queries[num];
    if (!q || !queryDisplay || !tableHead || !tableBody) return;

    queryDisplay.textContent = q.sql;

    tableHead.innerHTML = `<tr>${q.headers.map(h => `<th style="padding: 8px 12px; border: 1px solid var(--border-subtle); text-align: left;">${h}</th>`).join('')}</tr>`;

    tableBody.innerHTML = q.rows.map(row => `
      <tr style="border-bottom: 1px solid var(--border-subtle);">
        ${row.map(cell => `<td style="padding: 8px 12px; border: 1px solid var(--border-subtle); color: var(--text-secondary);">${cell}</td>`).join('')}
      </tr>
    `).join('');
  };

  qBtn1?.addEventListener('click', () => { loadQuery(1); });
  qBtn2?.addEventListener('click', () => { loadQuery(2); });
  qBtn3?.addEventListener('click', () => { loadQuery(3); });

  // Load query 1 by default
  loadQuery(1);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
