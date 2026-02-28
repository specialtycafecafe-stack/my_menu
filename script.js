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
            
            // 如果需要點擊自動複製品項名稱，可以取消下方註解：
            /*
            const name = item.querySelector('span:first-child').innerText;
            navigator.clipboard.writeText(name);
            alert('已複製：' + name + ' (可直接貼入表單)');
            */
        });
    });
});
