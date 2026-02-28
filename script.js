document.addEventListener('DOMContentLoaded', () => {
    console.log("興生吧選單系統已啟動");

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 點擊效果：輕微閃爍提示
            item.style.backgroundColor = '#fff0f0';
            setTimeout(() => {
                item.style.backgroundColor = 'transparent';
            }, 300);

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 1. 獲取品項名稱 (第一個 span)
            const name = this.querySelector('span:first-child').innerText;

            // 2. 執行複製功能
            navigator.clipboard.writeText(name).then(() => {
                // --- 視覺回饋開始 ---
                
                // A. 清除可能還在顯示中的舊標籤，避免連續點擊時疊加
                const existing = this.querySelector('.copy-feedback');
                if (existing) existing.remove();

                // B. 建立綠色小標籤
                const feedback = document.createElement('span');
                feedback.className = 'copy-feedback';
                feedback.innerText = '已複製';

                // C. 將標籤插入到價格 (price) 之前
                const priceSpan = this.querySelector('.price');
                this.insertBefore(feedback, priceSpan);

                // D. 點擊瞬間的背景閃爍 (使用淡淡的咖啡色或綠色，這裡選用你喜歡的淺綠)
                this.style.backgroundColor = '#f0fff4';

                // E. 動畫與自動移除
                // 1.5 秒後開始淡出
                setTimeout(() => {
                    feedback.style.opacity = '0';
                    feedback.style.transition = '0.3s';
                    
                    // 等淡出動畫跑完再徹底從 HTML 移除，並還原背景色
                    setTimeout(() => {
                        feedback.remove();
                        this.style.backgroundColor = 'transparent';
                    }, 300);
                }, 1200);

            }).catch(err => {
                console.error('複製失敗:', err);
            });
        });
    });
});
