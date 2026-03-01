document.addEventListener('DOMContentLoaded', () => {
    console.log("興生吧選單系統已啟動");

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 1. 獲取品項名稱
            const name = this.querySelector('span:first-child').innerText;

            // 2. 執行複製功能
            navigator.clipboard.writeText(name).then(() => {
                // 3. 視覺回饋：背景閃爍一下 (淡綠色)
                this.style.backgroundColor = '#f0fff4';

                // 4. 0.4 秒後還原背景色
                setTimeout(() => {
                    this.style.backgroundColor = 'transparent';
                }, 400);

                // 控制台紀錄，不使用 alert 避免干擾手機操作
                console.log("已複製品項：" + name);
            }).catch(err => {
                console.error("複製失敗", err);
            });
        });
    });
});
