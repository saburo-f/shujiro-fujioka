// 初期表示：subpage を非表示、home を表示
window.onload = () => {
    // すべての subpage を非表示にする
    document.querySelectorAll('.subpage').forEach(section => {
        section.style.display = 'none';
    });
    // home を表示
    document.getElementById('home').style.display = 'block';
};

// ページ切り替えイベント
document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');

        // CSS切り替え
        const newCss = (target === 'home') ? 'styles.css' : 'styles_sub.css';
        document.getElementById('dynamic-css').setAttribute('href', newCss);

        // セクションの表示切り替え
        toggleVisibility(target);
    });
});

// スクロールで「トップに戻る」ボタン表示
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// 「トップに戻る」ボタンの動作
document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// セクションの表示切り替えを行う関数
function toggleVisibility(target) {
    // 全セクションを非表示
    document.querySelectorAll('.subpage').forEach(section => {
        section.style.display = 'none';
    });

    // 対象セクションを表示
    const section = document.getElementById(target);
    if (section) {
        section.style.display = 'block';
    }
}

let currentPage; // グローバルに定義


