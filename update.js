// ==========================================
// 🚀 --- UPDATE POP-UP NOTIFICATION SYSTEM ---
// ==========================================

(function() {
    function showUpdateModal() {
        if (document.getElementById('update-popup-modal')) return;

        const modalHTML = `
            <div id="update-popup-modal" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background-color:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:999999; font-family:sans-serif; padding:15px;">
                <div style="background:#ffffff; width:100%; max-width:450px; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.3); overflow:hidden;">
                    <div style="background:#0d6efd; color:#ffffff; padding:15px 20px; font-weight:bold; font-size:18px; display:flex; justify-content:space-between; align-items:center;">
                        <span>📢 New Update Alert!</span>
                        <button id="close-update-btn" style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;">&times;</button>
                    </div>
                    <div style="padding:20px; color:#333; font-size:15px; line-height:1.8;">
                        <p style="margin-bottom:12px; font-weight:600; color:#0d6efd;">Dear User Baba Rizwan,</p>
                        <p style="margin-bottom:15px;">We inform to you new Option added <br><strong style="font-size:16px; color:#198754;">Easy Paisa</strong> <br>in the New updates. Please use and enjoy!</p>
                        <p style="margin-bottom:0; font-style:italic; color:#555; text-align:center; font-weight:bold; line-height:1.8;">And pray for Developer <br><span style="color:#d63384; font-size:16px;">Jam Imtiaz Ali Taj</span>.<br><br><span style="font-size:16px; color:#0d6efd; font-style:normal;">Thank So Much!</span></p>
                    </div>
                    <div style="background:#f8f9fa; padding:12px 20px; text-align:right; border-top:1px solid #dee2e6;">
                        <button id="update-ok-btn" style="background:#0d6efd; color:#fff; border:none; padding:8px 20px; border-radius:6px; font-weight:bold; cursor:pointer;">Got It, Thanks!</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const closeModal = () => {
            const modal = document.getElementById('update-popup-modal');
            if (modal) modal.remove();
        };

        document.getElementById('close-update-btn').addEventListener('click', closeModal);
        document.getElementById('update-ok-btn').addEventListener('click', closeModal);
    }

    if (document.readyState === 'LOADING') {
        document.addEventListener('DOMContentLoaded', showUpdateModal);
    } else {
        showUpdateModal();
    }
})();
