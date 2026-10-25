// ==========================================
// 🚀 --- UPDATE POP-UP NOTIFICATION SYSTEM ---
// ==========================================

(function() {
    const UPDATE_KEY = "raab_comm_easypaisa_update_shown";
    const START_DATE_KEY = "raab_comm_update_start_date";
    const TOTAL_DAYS = 3; // Sirf 3 din tak show hoga

    function showUpdateModal() {
        // Check karein ke kya modal pehle se to nahi bana hua
        if (document.getElementById('update-popup-modal')) return;

        const modalHTML = `
            <div id="update-popup-modal" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background-color:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:999999; font-family:sans-serif; padding:15px;">
                <div style="background:#ffffff; width:100%; max-width:450px; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.3); overflow:hidden; animation: fadeIn 0.3s ease-in-out;">
                    <div style="background:#0d6efd; color:#ffffff; padding:15px 20px; font-weight:bold; font-size:18px; display:flex; justify-content:space-between; align-items:center;">
                        <span>📢 New Update Alert!</span>
                        <button id="close-update-btn" style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;">&times;</button>
                    </div>
                    <div style="padding:20px; color:#333; font-size:15px; line-height:1.6;">
                        <p style="margin-bottom:12px; font-weight:600; color:#0d6efd;">Dear User Baba Rizwan,</p>
                        <p style="margin-bottom:12px;">We inform to you new Option added <strong>Easy Paisa</strong> in the New updates. Please use and enjoy!</p>
                        <p style="margin-bottom:0; font-style:italic; color:#555; text-align:center; font-weight:bold;">And pray for Developer <span style="color:#d63384;">Jam Imtiaz Ali Taj</span>. Thank So Much!</p>
                    </div>
                    <div style="background:#f8f9fa; padding:12px 20px; text-align:right; border-top:1px solid #dee2e6;">
                        <button id="update-ok-btn" style="background:#0d6efd; color:#fff; border:none; padding:8px 20px; border-radius:6px; font-weight:bold; cursor:pointer;">Got It, Thanks!</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', document.createRange().createContextualFragment(modalHTML));

        const closeModal = () => {
            const modal = document.getElementById('update-popup-modal');
            if (modal) modal.remove();
        };

        document.getElementById('close-update-btn').addEventListener('click', closeModal);
        document.getElementById('update-ok-btn').addEventListener('click', closeModal);
    }

    function checkAndUpdateStatus() {
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        let startDate = localStorage.getItem(START_DATE_KEY);

        // Agar pehli baar chal raha hai to start date aaj ki set kar dein
        if (!startDate) {
            startDate = today;
            localStorage.setItem(START_DATE_KEY, startDate);
        }

        // Din calculate karein ke update ko kitne din ho gaye hain
        const startTimestamp = new Date(startDate).getTime();
        const currentTimestamp = new Date(today).getTime();
        const diffDays = Math.floor((currentTimestamp - startTimestamp) / (1000 * 60 * 60 * 24)) + 1;

        // Agar 3 din se zyada ho gaye hain to khatam karein
        if (diffDays > TOTAL_DAYS) return;

        // Check karein ke kya aaj ke din yeh pop-up pehle show ho chuka hai ya nahi
        const lastShownDate = localStorage.getItem(UPDATE_KEY);
        if (lastShownDate !== today) {
            // Aaj nahi dikhaya to show karein aur date save kar lein
            if (document.readyState === 'LOADING') {
                document.addEventListener('DOMContentLoaded', showUpdateModal);
            } else {
                showUpdateModal();
            }
            localStorage.setItem(UPDATE_KEY, today);
        }
    }

    checkAndUpdateStatus();
})();
